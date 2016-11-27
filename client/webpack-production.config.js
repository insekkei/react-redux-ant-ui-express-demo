/**
 * @file 营销平台 webpack prod config
 * @author hancong05@baidu.com
 * @date 2016-10-25
 */

const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: [path.join(__dirname, '/src/app/app.js')],
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js' // Name of output file
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false
            }
        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Transfer Files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, 'src'))
    ],
    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js$/,  // All .js files
                // react-hot is like browser sync and babel loads jsx and es6-7
                loaders: ['react-hot', 'babel-loader'],
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
