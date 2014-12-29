enb-autoprefixer
================
[![NPM version](https://badge.fury.io/js/enb-autoprefixer.png)](http://badge.fury.io/js/enb-autoprefixer) [![Dependency Status](https://david-dm.org/enb-make/enb-autoprefixer.png)](https://david-dm.org/enb-make/enb-autoprefixer) [![devDependency Status](https://david-dm.org/enb-make/enb-autoprefixer/dev-status.png)](https://david-dm.org/enb-make/enb-autoprefixer#info=devDependencies)

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


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Isquariel/enb-autoprefixer/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

