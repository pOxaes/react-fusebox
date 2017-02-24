var gulp = require('gulp');
var fsbx = require('fuse-box');
var config = require('../config');
var path = require('path');

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
            // sass
            [
                fsbx.SassPlugin({ outputStyle: 'compressed' }),
                fsbx.CSSResourcePlugin({ inline: true }),
                fsbx.CSSPlugin()
            ]
        ]
    });

    fuseBox.devServer('>index.jsx', {port: config.port});
});
