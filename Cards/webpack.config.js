var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helper');

module.exports = {
    entry: {
        'app': './source/main.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    tslint: {
        emitErrors: true
    },
    module: {
        preLoaders: [
            { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
        ],
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        },
        {
            test: /.css$/,
            loaders: [ExtractTextPlugin.extract('style', 'css-loader'), 'to-string', 'css']
        }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new ExtractTextPlugin('[name].css'),

        new webpack.ProvidePlugin({ Velocity: 'velocity-animate' })
    ],

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:4321/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};

