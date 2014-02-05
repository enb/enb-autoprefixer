enb-autoprefixer
================

[Autoprefixer](https://github.com/ai/autoprefixer) tech for [Enb](https://github.com/enb-make/enb)

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
