const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' // 这是指定 输出的文件的名称
    },
    plugins: [ //配置插件的节点
        //new webpack.HotModuleReplacementPlugin(),    //new 一个热更新的 模块对象，这是启动热更新的
        new htmlWebpackPlugin({  //创建一个内存中生成 html 页面的插件
            template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据指定的路径，去生成内存中的页面
            filename: 'index.html'  //指定生成页面的名称
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //配置处理。css文件的第三方loader规则
            // 需要less 和 less-loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // limit 是限制大小和长度的  ，name是照片的名字，ext是后缀名
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=13000&name=[name].[ext]' },

            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 bootstrap字体文件的 loader 

            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    }
}