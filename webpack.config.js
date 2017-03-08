//一个常见的Webpack配置文件
var webpack = require('webpack');
var path = require('path');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var chunkhash = '';
//产品在上线的时候可以加一个extract-text-webpack-plugin
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map', //配置生成Source
    entry: __dirname + "/src/entry.js",
    output: {
        path: path.join(__dirname, "dist"),
        // publicPath: '/dist',
        filename: 'js/[name].js'
        // chunkFilename: 'js/[name].'+ chunkhash +'js'
    },
    // resolve: {
    //     extensions: ['', '.js', '.vue'],
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //      }
    // },

    module: {
        loaders: [{
            //处理json的loader
            test: /\.json$/,
            loader: "json-loader"
        }, {
            //处理js的loader
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
        }, {
            //处理css的loader
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },

    devServer: {
        contentBase: './dist/html',//查一下这的意思 结果是服务生成文件夹的位置，如果不设置的话它会以当前目录为根目录
        port: 9090,
        // hot: true,
        // colors: true, //终端输出结果为彩色。
        historyApiFallback: true, //不跳转 在开发单页面应用时用处比较大。
        inline: true //实时刷新
    },

    plugins: [
            // new CopyWebpackPlugin([{
            //     from: './src'
            // }]),
            new HtmlWebpackPlugin({
                filename:'html/index.html',
                template: 'index.html',
                // inject: 'head',
                minify:{
                // 合并多个空格
                collapseWhitespace: true,
                // 删除注释
                removeComments: true,
                // 删除冗余属性
                removeRedundantAttributes: true
                }
            })
    ]
}