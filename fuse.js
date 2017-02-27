const fsbx = require('fuse-box');
const path = require('path');
const autoprefixer = require('autoprefixer');
const eslinter = require('fuse-box-eslint-plugin');
const config = require('./config');
const del = require('del');

const FSBX_BASE_CONFIG = {
    homeDir: config.src,
    outFile: path.join(config.dist, 'app.js')
};

const FSBX_ENV_CONFIG = {
    development: {
        sourceMap: {
            bundleReference: 'sourcemaps.js.map',
            outFile: path.join(config.dist, 'sourcemaps.js.map')
        },
        plugins: [
            fsbx.EnvPlugin({NODE_ENV: 'development'}),
            fsbx.BabelPlugin(),
            eslinter(),
            fsbx.SourceMapPlainJsPlugin(),
            fsbx.JSONPlugin(),
            [
                fsbx.SassPlugin(),
                fsbx.PostCSS([autoprefixer]),
                fsbx.CSSResourcePlugin({inline: true}),
                fsbx.CSSPlugin()
            ]
        ]
    },
    production: {
        plugins: [
            fsbx.EnvPlugin({NODE_ENV: 'production'}),
            fsbx.BabelPlugin(),
            fsbx.UglifyJSPlugin(),
            fsbx.JSONPlugin(),
            [
                fsbx.SassPlugin({outputStyle: 'compressed'}),
                fsbx.PostCSS([autoprefixer]),
                fsbx.CSSResourcePlugin({inline: true}),
                fsbx.CSSPlugin()
            ]
        ]
    }
};

const fsbxConf = Object.assign(FSBX_BASE_CONFIG, FSBX_ENV_CONFIG[config.env]);

del.sync([
    path.join(config.dist, '**'),
    '!' + config.dist,
    '!' + path.join(config.dist, 'index.html')
]);

// bundle vendor
fsbx.FuseBox.init({
    homeDir: config.src,
    log: false
}).bundle({
    [path.join(config.dist, 'vendor.js')]: config.vendors.join(' +')
});

fsbx.FuseBox.init(fsbxConf)
    .devServer('>index.js', {port: config.port, root: config.dist});
