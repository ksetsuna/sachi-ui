'use strict';

const path    = require('path'),
      webpack = require('webpack');
const {ui: config} = require('config');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const webpackConfig = {
    entry: {
        index: './index.js'
        //vendor: [/*'lodash',*/ 'bluebird', 'react', 'react-dom'/*, 'moment'*/]
    },
    context: path.join(__dirname, '/ui/js'),

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, '/static'),
        publicPath: '/',
        filename: 'js/[name].[contenthash:8].js'
    },

    resolve: {
        alias: {
            '@': path.join(__dirname, '/ui/js'),
            '@css': path.join(__dirname, '/ui/css')
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {cacheDirectory: true}
            },
            include: path.join(__dirname, '/ui/js')

        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'less-loader', options: {sourceMap: true, relativeUrls: true}}
                ]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }]
            })
        }, {
            test: /\.yml$/,
            use: ['json-loader', 'yaml-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[ext]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
            }
        }]
    },
    externals: [],
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 1
                }
            }
        }, minimizer: [
            new UglifyJsPlugin({cache: true, parallel: true})
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        host: '0.0.0.0',
        port: require('config').server.http.port
    },
    plugins: [
        new webpack.DefinePlugin({
            API_ROOT: JSON.stringify(config.api.prefix),
            APP_NAME: JSON.stringify(config.name)
        }),
        //new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            title: config.name,
            filename: 'index.html',
            template: path.join(__dirname, 'ui/index.html'),
            chunksSortMode: 'dependency'
        })
    ]
};


module.exports = webpackConfig;
