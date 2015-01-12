enb-autoprefixer
================
[![NPM version][npm-image]][npm-link]
[![Dependency status][deps-image]][deps-link]
[![Development Dependency status][devdeps-image]][devdeps-link]
[![Peer Dependency status][peerdeps-image]][peerdeps-link]

[Autoprefixer](https://github.com/postcss/autoprefixer) tech for [Enb](https://github.com/enb-make/enb)

Usage: 
```js
nodeConfig.addTech([
  require('enb-autoprefixer'),
  {
    sourceTarget: "?.css",  // Source CSS
    destTarget: "?.ap.css", // Target
    browserSupport: [       // Browsers to support
      "> 1%",
      "last 2 versions",
      "Firefox ESR",
      "Opera 12.1"
    ]
  }
]);
```

[npm-image]: https://img.shields.io/npm/v/enb-autoprefixer.svg?style=flat
[npm-link]: https://npmjs.org/package/enb-autoprefixer
[deps-image]: https://img.shields.io/david/enb-make/enb-autoprefixer.svg?style=flat
[deps-link]: https://david-dm.org/enb-make/enb-autoprefixer
[devdeps-image]: https://img.shields.io/david/dev/enb-make/enb-autoprefixer.svg?style=flat
[devdeps-link]: https://david-dm.org/enb-make/enb-autoprefixer#info=devDependencies
[peerdeps-image]: https://img.shields.io/david/peer/enb-make/enb-autoprefixer.svg?style=flat
[peerdeps-link]: https://david-dm.org/enb-make/enb-autoprefixer#info=peerDependencies
