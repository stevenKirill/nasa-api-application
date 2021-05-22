const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].[hash].bundle.js`,
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserWebpackPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',

        }),
    ]
};