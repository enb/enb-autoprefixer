var Vow = require('vow');
var vowFs = require('vow-fs');
var autoprefixer = require('autoprefixer');

module.exports = require('enb/lib/build-flow').create()
    .name('css-autoprefixer')
    .defineOption('browserSupport')
    .defineOption('sourcemap')
    .target('target', '?.css')
    .useFileList("css")
    .builder(function (cssFiles) {
        var browserSupport = this._browserSupport;
        var autoprefixerProcessor = browserSupport ? autoprefixer.apply(this, browserSupport) : autoprefixer;
        return Vow
            .all(cssFiles.map(function (file) {
                return vowFs.read(file.fullname, 'utf8').then(function (css) {
                    return autoprefixerProcessor.process(css).css;
                });
            }))
            .then(function (contents) {
                return contents.join('\n');
            });
    })
    .createTech();
