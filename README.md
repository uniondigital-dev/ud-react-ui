<div id="top"></div>

<!-- PROJECT LOGO -->
<div align="center">
  <!-- <a href="https://uniondigital.io">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Unionbank_2018_logo.svg/640px-Unionbank_2018_logo.svg.png" alt="Logo" width="500" height="150">
  </a> -->

  <div align="center">

  [![Contributors][contributors-shield]][contributors-url]
  [![Issues][issues-shield]][issues-url]
  [![GPLv3 License][license-shield]][license-url]

  </div>

  <div align="center">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg">
    <img src="https://forthebadge.com/images/badges/built-with-swag.svg">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">
  </div>

  <h3 align="center">UD React UI</h3>

  <p align="center">
    Union Digital's react component UI for mini apps
    <br />
    <a href="https://uddocs.uniondigital.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://uddemo.uniondigital.io">View Demo</a>
    ·
    <a href="https://github.com/uniondigital-dev/ud-react-ui/issues">Report Bug</a>
    ·
    <a href="https://github.com/uniondigital-dev/ud-react-ui/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
## Table of Contents

<ol>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ol>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

The best way to consume UD component is via the npm package which you can install with npm.

```shell
npm install ud-react-ui
```

### Importing CSS

Import CSS in the `src/index.js` file:

```jsx title="src/index.js"
import 'ud-react-ui/dist/style.css';
```

### Importing Components

```jsx title="src/App.js"
import { Button } from 'ud-react-ui';
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

See how we implement the component using `create-react-app` [here](https://github.com/uniondigital-dev/ud-miniapp-showcase).

_For more examples, please refer to the [Documentation](https://uddocs.uniondigital.com)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GPLv3 License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/uniondigital-dev/ud-react-ui.svg?style=for-the-badge
[contributors-url]: https://github.com/uniondigital-dev/ud-react-ui/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/uniondigital-dev/ud-react-ui.svg?style=for-the-badge
[issues-url]: https://github.com/uniondigital-dev/ud-react-ui/issues
[license-shield]: https://img.shields.io/github/license/uniondigital-dev/ud-react-ui.svg?style=for-the-badge
[license-url]: https://github.com/uniondigital-dev/ud-react-ui/blob/master/LICENSE.md

## Issues

### Duplicate react dependency (local development only)

Assuming `myapp` and `ud-react-ui` are sibling folders, one possible fix is to run this command:

```shell
npm link ../<myapp-folder>/node_modules/react
```

_More info regarding this issue [here](https://reactjs.org/warnings/invalid-hook-call-warning.html)._