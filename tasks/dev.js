const gulp = require('gulp');
const fsbx = require('fuse-box');
const path = require('path');
const autoprefixer = require('autoprefixer');
const eslinter = require('fuse-box-eslint-plugin');
const config = require('../config');

gulp.task('watch', function() {
    gulp.watch(path.join(config.src, 'templates', '**', '*'), ['templates']);
});

gulp.task('fuse', function() {
    let fuseBox = new fsbx.FuseBox({
        homeDir: config.src,
        outFile: path.join(config.dist, 'app.js'),
        sourceMap: {
            bundleReference: 'sourcemaps.js.map',
            outFile: path.join(config.dist, 'sourcemaps.js.map')
        },
        plugins: [
            fsbx.BabelPlugin(),
            eslinter({
                pattern: /js(x)*$/
            }),
            [
                fsbx.SassPlugin({ outputStyle: 'compressed' }),
                fsbx.PostCSS([autoprefixer]),
                fsbx.CSSResourcePlugin({ inline: true }),
                fsbx.CSSPlugin()
            ]
        ]
    });
    fuseBox.devServer('>index.jsx', {port: config.port});
});
