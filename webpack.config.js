var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|jp[e]?g|gif|svg|bmp)$/,
                loader:'url-loader?limit=8192'
            },
            {

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};