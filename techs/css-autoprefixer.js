var autoprefixer = require('autoprefixer');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineRequiredOption('sourceTarget')
    .defineOption('browserSupport')
    .target('destTarget', '?.css')
    .useSourceText('sourceTarget')
    .methods({
        _getOptions: function () {
            this._browserSupport = this.getOption('browserSupport', null);
        },
        _getPrefixer: function () {
            this._autoprefixer = this._browserSupport ? autoprefixer.apply(this, this._browserSupport) : autoprefixer;
            return this._autoprefixer;
        },
        _getPrefixedCss: function (source) {
            var autoprefixer = this._getPrefixer();
            return autoprefixer.process(source).css;
        }
    })
    .builder(function (css) {
        this._getOptions();
        return this._getPrefixedCss(css);
    })
    .createTech();
