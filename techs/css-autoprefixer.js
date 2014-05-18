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
            return this._autoprefixer || (this._autoprefixer = this._browserSupport ?
                autoprefixer.apply(autoprefixer, this._browserSupport) :
                autoprefixer);
        },
        _getPrefixedCss: function (source) {
            return this._getPrefixer().process(source).css;
        }
    })
    .builder(function (css) {
        return this._getPrefixedCss(css);
    })
    .createTech();
