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
        var prefixer = autoprefixer({
            browsers: this._browserSupport || autoprefixer.default
        });

        try {
            return prefixer.process(css).css;
        } catch (e) {
            throw new Error(e);
        }
    })
    .createTech();
