var Vow = require('vow');
var vowFs = require('vow-fs');
var autoprefixer = require('autoprefixer');

module.exports = require('enb/techs/css').buildFlow()
    .name('css-autoprefixer')
    .defineOption('browserSupport')
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
    .builder(function (cssFiles) {
        var node = this.node;
        var css = cssFiles.map(function (file) {
            return '@import "' + node.relativePath(file.fullname) + '";';
        }).join('\n');

        return this._processCss(css, node.resolvePath(this._destTarget))
            .then(function (css) {
                this._getOptions();
                return this._getPrefixedCss(css);
            }, this);
    })
    .createTech();
