const fsbx = require('fuse-box');
const config = require('./config.js');
let path = require('path');

let fuseBox = new fsbx.FuseBox({
    homeDir: config.src,
    outFile: path.join(config.dist,'bundle.js'),
    sourceMap: {
        bundleReference: 'sourcemaps.js.map',
        outFile: path.join(config.dist, 'sourcemaps.js.map')
    },
    plugins: [
        fsbx.BabelPlugin(),
        fsbx.CSSPlugin()
    ]
});

fuseBox.devServer('>index.jsx');
