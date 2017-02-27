/* eslint-disable no-process-env */
const yargs = require('yargs');

const DEFAULT_ENV = 'development';
const args = yargs.argv;
const env = args.env || process.env.NODE_ENV || DEFAULT_ENV;

const config = {
    src: 'src',
    dist: 'dist',
    port: '3001',
    env,
    vendors: [
        'react',
        'react-dom',
        'react-redux'
    ]
};

module.exports = config;
/* eslint-enable no-process-env */
