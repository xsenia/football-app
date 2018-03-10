var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
 
module.exports = {
    context: path.join(__dirname, '/app'),
    entry: "./index",
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/.dev-deploy/',
        filename: 'app.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
};