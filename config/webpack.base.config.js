'use strict'
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.vue', 'json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue|ts|tsx)$/,
                loader: 'eslint-loader!vue-loader!ts-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: !config.dev.showEslintErrorsInOverlay
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}