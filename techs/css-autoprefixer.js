var autoprefixer = require('autoprefixer');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineRequiredOption('sourceTarget')
    .defineOption('browserSupport')
    .target('destTarget', '?.css')
    .useSourceText('sourceTarget')
    .needRebuild(function (cache) {
        this._sourcePath = this.node.resolvePath(this._sourceTarget);
        return cache.needRebuildFile('unprefixed-file', this._sourcePath);
    })
    .saveCache(function (cache) {
        cache.cacheFileInfo('unprefixed-file', this._sourcePath);
    })
    .methods({
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
        return this._getPrefixedCss(css);
    })
    .createTech();
