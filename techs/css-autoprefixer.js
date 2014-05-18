var autoprefixer = require('autoprefixer');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineRequiredOption('sourceTarget')
    .defineOption('browserSupport')
    .target('destTarget', '?.css')
    .useSourceText('sourceTarget')
    .builder(function (css) {
        var autoprefixerInstance = this._browserSupport ?
            autoprefixer.apply(autoprefixer, this._browserSupport) :
            autoprefixer;

        return autoprefixerInstance.process(css).css;
    })
    .createTech();
