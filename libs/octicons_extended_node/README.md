
![light-mode](https://user-images.githubusercontent.com/16908811/189388116-76fdda7f-ca1c-4b39-800e-272a8c985975.png#gh-light-mode-only)

![dark-mode](https://user-images.githubusercontent.com/16908811/189388072-c2687f9e-a2bb-4d5b-b14f-ad9bc74a1036.png#gh-dark-mode-only)

# Octicons Extended

A handcrafted extension to GitHub’s beautiful Octicons. This is the Node build. Use React build to access Octicons Extended in React projects.

**[octicons-extended-react](/libs/octicons_extended_react)**

[![npm version](https://img.shields.io/npm/v/octicons-extended-react.svg)](https://www.npmjs.org/package/octicons-extended-react)
## Usage

The usage is almost identical to the original Octicons and all original icons are covered. Therefore, transferring from the Octicons to Octicons Extended requires almost minimal modifications to your existing code. 

```
// grab an icon
var octicons = require("octicons-extended")
octicons.alert
```
```
// output
"alert": {
    "name": "alert",
    "category": "original octicons",
    "heights": {
        "16": {
            "width": 16,
            "path": "<path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"></path>"
        },
        "24": {
            "width": 24,
            "path": "<path d=\"M13 17.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-8.25a.75.75 0 10-1.5 0v4.5a.75.75 0 101.5 0v-4.5z\"></path><path fill-rule=\"evenodd\" d=\"M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752L9.836 3.244zm3.03.751a1 1 0 00-1.732 0L2.168 19.499A1 1 0 003.034 21h17.932a1 1 0 00.866-1.5L12.866 3.995z\"></path>"
        }
    }
}
```

## Contributing

### Feedback, ideas, and bug reports

If you have feedback and ideas for improvement, open a new issue in the repo.

### Request a new icon

Icon requests are welcome! Don't hesitate providing an idea or a detailed example. To request a new icon, simply open an issue. 

### Adding or updating an icon

Pipelines are being set up to make this easier. Meanwhile, just drop your icon into `icons/[one-of-the-categies]`. Make sure the filename is `[icon-name]-[icon-size].svg`. Then create a pull request.  

## License

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

_Code License:_ [MIT](./LICENSE)
Applies to all other files