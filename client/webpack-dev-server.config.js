/**
 * @file 营销平台 webpack dev config
 * @author hancong05@baidu.com
 * @date 2016-10-25
 */

const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: [path.join(__dirname, '/src/app/app.js')],
    devtool: 'eval',
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js'
    },
    plugins: [
        // Enables Hot Modules Replacement
        // new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],
    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
};

module.exports = config;
