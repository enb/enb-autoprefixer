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

        var autoprefixer = require('autoprefixer-core');
        var browserslist = require('browserslist');

        var prefixer = autoprefixer({
            browsers: this._browserSupport || browserslist.defaults
        });

        try {
            return prefixer.process(css).css;
        } catch (e) {
            throw new Error(e);
        }

    })
    .createTech();
