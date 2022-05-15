//引入包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//clean插件
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
// const { resolve } = require('path');
//webpack配置信息
module.exports = {

    //指定文件入口
    entry:"../snake/src/index.ts",
    mode: "production",
    //指定存放的位置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // 不使用箭头函数
    environment: {
        arrowFunction: false
      }
  
    },

    //要使用的模块
    module: {
        rules: [
            {
                // test 指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [ 
                  // 配置babel
                  {
                    // 指定加载器
                    loader: 'babel-loader',
                    // 设置babel
                    options: {
                      // 设置预定义的环境
                      presets: [
                        [
                          // 指定环境插件
                          "@babel/preset-env",
                          // 配置信息
                          {
                            // 要兼容的目标浏览器
                            targets: {
                              "chrome": "101",
                              "ie": "11"
                            },
                            // 指定corejs的版本
                            "corejs": "3",
                            // 使用corejs的方式 "usage" 按需加载
                            "useBuiltIns": "usage"
                          }
                        ]
                      ]
                    }
                  }, 'ts-loader']},
            //设置less文件,loader是从下往上
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 version'
                                        }
                                    ]
                                ]
                            }
                        }

                    },
                    "less-loader"
                ]
            }

        ]
    },

    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
                // title: "第一个"

                //自定义网页模板
                template: "../snake/src/index.html"
            }
        ),
    ],
    // 设置模块
    resolve: {
        extensions : ['.ts', '.js']
    }



};