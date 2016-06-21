var webpack = require('webpack');
var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.join(__dirname, 'src'),
            loaders: ['babel']
        }]
    }
};