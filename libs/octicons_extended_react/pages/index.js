import React from 'react';
import { Box, Text } from '@primer/components';
import pkg from '../package.json';
import Octicon from '../src';
import * as octicons from '../src';

export default function App() {
  const sizes = ['small', 'medium', 'large'];
  return (
    <Box p={4}>
      <table className='data-table'>
        <thead>
          <tr>
            <th>module name</th>
            {/* <th>small, medium, large</th> */}
            <th>code</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(octicons).map((key) => {
            const Icon = octicons[key];
            return (
              <tr key={key}>
                <td>
                  <Text mono nowrap>
                    {Icon.name}
                  </Text>
                </td>
                <td>
                  {sizes.map((size) => (
                    <Text mr={4} key={size}>
                      {/* An error of undefined being passed in as Icon will be thrown if we render all icons with this line */}
                      {/* For unknown reasons, it can't be caught in this file (?!), but it shows up in the logs if we console log src/index.js. */}
                      {/* Commenting out this line does make the error disappear so they definitely are related. Very strange. */}
                      {/* <Octicon icon={Icon} size={size} verticalAlign='middle' /> */}
                    </Text>
                  ))}
                </td>
                <td>
                  <pre>
                    {`import Octicon, {${Icon.name}} from '${pkg.name}'/>
                  `.trim()}
                  </pre>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
