
![light-mode](https://user-images.githubusercontent.com/16908811/189388116-76fdda7f-ca1c-4b39-800e-272a8c985975.png#gh-light-mode-only)

# Octicons Extended

A handcrafted extension to GitHub’s beautiful Octicons.
## Usage

The usage is almost identical to the original Octicons and all original icons are covered. Therefore, transferring from the Octicons to Octicons Extended requires almost minimal modifications to your existing code. 

```
import React from 'react'

// original Octicons
import {BeakerIcon, ZapIcon} from '@primer/octicons-react'

// Octicons Extended
import {BeakerIcon, ZapIcon} from 'octicons-extended-react'

// use icons
const Icon = ({boom}) => {
  return boom ? <ZapIcon /> : <BeakerIcon />
}

// set size (number/string), fill, aria label, vertical alignment
const Icon = () => {
  return <ZapIcon size="normal" size='normal' fill="#f00" verticalAlign="middle"/>
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