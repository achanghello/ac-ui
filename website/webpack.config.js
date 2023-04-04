const { VueLoaderPlugin } = require("vue-loader")
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const VueTemplateCompiler = require('vue-template-compiler');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {  // 这里是commrnt.js语法
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'main.ts'),
    output: {
        path: path.resolve(__dirname, '../website-dist'),
        // 输出的文件名称
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                // options: {
                //     compiler: VueTemplateCompiler,
                // },
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
                // 使用一个loader时,直接写就行了
                loader: 'url-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html')
        })
    ]
}
