const fsbx = require('fuse-box');
const path = require('path');
const autoprefixer = require('autoprefixer');
const eslinter = require('fuse-box-eslint-plugin');
const config = require('./config');

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

const fuseBox = new fsbx.FuseBox(Object.assign(FSBX_BASE_CONFIG, FSBX_ENV_CONFIG[config.env]));
fuseBox.devServer('>index.js', {port: config.port});
