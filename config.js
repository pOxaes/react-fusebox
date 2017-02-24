var yargs = require('yargs');

var args = yargs.argv;
var env = args.env || process.env.NODE_ENV || 'development';
var isDevMode = args._.indexOf('dev') >= 0;

var errorHandler = function(err) {
    console.log(err);
    this.emit('end');
};

var config = {
    src: 'src',
    dist: 'dist',
    port: '3001',

    vendors: [
        'node_modules/react/dist/React.js',
        'node_modules/react-dom/dist/react-dom.js'
    ],

    plumberConfig: {
        errorHandler: function(error) {
            console.log(error);
            this.emit('end');
        }
    }
};

module.exports = config;
