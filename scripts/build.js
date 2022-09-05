#!/usr/bin/env node

/* eslint-env node */
const fs = require('fs-extra');
const path = require('path');
const globby = require('globby');
const cheerio = require('cheerio');
const trimNewlines = require('trim-newlines');
const yargs = require('yargs');
const merge = require('lodash.merge');

// Build a JSON file that contains all information about the SVGs
// A modified version of https://github.com/primer/octicons/blob/main/script/build.js

// specify args
const { argv } = yargs
  .usage(
    'Usage: $0 --extended <extended icons filepath> --og <original octicons filepath> --output <output filepath>'
  )
  .example(
    '$0 --extended icons/**/*.svg --og og-icons/**/*.svg --output build/data.json'
  )
  .option('extended', {
    type: 'array',
    demandOption: true,
    describe: 'Input extended SVG files. Files will be found recursively.',
  })
  .option('og', {
    type: 'array',
    demandOption: true,
    describe: 'Input original SVG files. Files will be found recursively.',
  })
  .option('output', {
    type: 'string',
    describe:
      'Output JSON file. Defaults to stdout if no output file is provided.',
  });

// find svg files
const svgFilepaths = globby
  .sync(argv.extended)
  .filter((filepath) => path.parse(filepath).ext === '.svg');
if (svgFilepaths.length === 0) {
  // eslint-disable-next-line no-console
  console.error('No input SVG file(s) found');
  process.exit(1);
}

// merge og icons into the paths, extended icons take priority
const ogSvgFilepaths = globby
  .sync(argv.og)
  .filter((filepath) => path.parse(filepath).ext === '.svg');
const namesTemp = [];
svgFilepaths.map((s) => {
  namesTemp.push(path.parse(s).base);
});
ogSvgFilepaths.map((ogFilepath) => {
  if (!namesTemp.includes(path.parse(ogFilepath).base)) {
    svgFilepaths.push(ogFilepath);
  }
});

// process all icons
let exitCode = 0;
const names = [];
const icons = svgFilepaths.map((svgFilepath) => {
  try {
    const svgFilename = path.parse(svgFilepath).base;
    const svgFilenamePattern = /(.+)-([0-9]+).svg$/;

    if (!svgFilenamePattern.test(svgFilename)) {
      throw new Error(
        `${filename}: Invalid filename. Not matching the pattern defined.`
      );
    }

    const [, name] = svgFilename.match(svgFilenamePattern);
    const svg = fs.readFileSync(path.resolve(svgFilepath), 'utf8');
    const svgElement = cheerio.load(svg)('svg');
    const svgWidth = parseInt(svgElement.attr('width'));
    const svgHeight = parseInt(svgElement.attr('height'));
    const svgPath = trimNewlines(svgElement.html()).trim();

    if (!svgWidth) {
      throw new Error(`${svgFilename}: Missing width attribute.`);
    }

    if (!svgHeight) {
      throw new Error(`${svgFilename}: Missing height attribute.`);
    }

    if (names.includes(name)) {
      // throw new Error(`${svgFilename}: Duplicate icon name.`);
    } else {
      names.push(name);
    }

    return {
      name,
      width: svgWidth,
      height: svgHeight,
      path: svgPath,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    exitCode = 1;
    return null;
  }
});

// do not build if error occurred
if (exitCode !== 0) {
  process.exit(exitCode);
}

// build
const iconsByName = icons.reduce(
  (acc, icon) =>
    merge(acc, {
      [icon.name]: {
        name: icon.name,
        heights: {
          [icon.height]: {
            width: icon.width,
            path: icon.path,
          },
        },
      },
    }),
  {}
);

// output
if (argv.output) {
  fs.outputJsonSync(path.resolve(argv.output), iconsByName);
} else {
  process.stdout.write(JSON.stringify(iconsByName));
}
