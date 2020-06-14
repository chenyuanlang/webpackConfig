const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// 引入vue-loader的plugin模块
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.resolve('./src/main.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                }],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400,
                        name: 'assets/images/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // 安装完vue-loader后，一定不要忘记安装一个依赖项包vue-template-compiler，这个
            // 包的作用就是编译.vue文件里的template标签的
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ],
    },
    // resolve配置项是一个可选配置项，作用就是解决路径和文件后缀名的问题
    resolve: {
        // alias解决路径的配置项问题的，就是给某些比较长，比较烦躁的路径起个别名
        alias: {
            zhuofeng: './components',
        },
        // 把一些不想写的后缀名加到这里边来即可
        // 这里边必须要写.js的配置项，否则报错！因为使用resolve模块后，整个改变了webpack构建时对被解析文件的后缀名关联
        // 这里配置后缀名时，如果不写.js，就会误导webpack只处理.vue文件，而不再处理.js文件了，导致引入的vue包和node_modules里的包全解析挂！
        extensions: ['.vue', '.js'],
    },
    // 不要忘记先安装全局的，作用就是命令启动，安装完项目里的webpack-dev-server@2.9.0后，需要在webpack配置文件中配置dev-server
    // devServer: {
    //     inline: true,
    //     // 开启热部署
    //     hot: true,
    //     // 开启自动打开浏览器
    //     open: true,
    //     // 给dev-server一个端口号
    //     port: 11211,
    // },
    plugins: [
        // 如果是在webpack配置文件中配置webpack-dev-server，则需要在这里启动一个热更新热部署的插件
        // new webpack.HotModuleReplacementPlugin(),
        // 实例化一下vue-loader的plugin对象
        new vueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            filename: path.resolve('./dist/index.html'),
            inject: 'body',
            favicon: path.resolve('./src/assets/images/favicon.ico'),//设置页面的icon图标
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                minifyCSS: true,
                collapseWhitespace: true,
                minifyJS: true,
            },
        })
    ],
};