var autoprefixer = require('autoprefixer-core');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineRequiredOption('sourceTarget')
    .optionAlias('sourceTarget', 'source')
    .defineOption('destTarget')
    .optionAlias('destTarget', 'target')
    .defineOption('browserSupport')
    .target('destTarget', '?.css')
    .useSourceText('sourceTarget')
    .builder(function (css) {
        var autoprefixerInstance = this._browserSupport ?
            autoprefixer.apply(autoprefixer, {browsers: this._browserSupport}) :
            autoprefixer;

        return autoprefixerInstance.process(css).css;
    })
    .createTech();
