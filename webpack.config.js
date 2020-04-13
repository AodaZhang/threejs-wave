/*
 * @Description: webpack配置
 * @Author: AodaZhang
 * @Date: 2020-04-12 18:44:47
 * @LastEditTime: 2020-04-13 14:56:11
 */
const path = require('path')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 路径
const entryPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist')
const templatePath = path.resolve(__dirname, './public/index.html')

// 基本配置
const baseConfig = {
  entry: {
    index: entryPath
  },
  output: {
    filename: 'bundle.[contentHash:8].js',
    path: outputPath
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        outputPath
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: templatePath,
      chunks: ['index', 'vendor']
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  "chrome": "70"
                },
                useBuiltIns: 'usage',
                corejs: 3
              }
            ]
          ]
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          priority: 1,
          minSize: 0,
          minChunks: 1
        }
      }
    }
  }
}

// 开发配置
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: false,
    port: 9000
  }
}

// 生产配置
const prodConfig = {
  mode: 'production',
  devtool: 'none',
  performance: false,
}
module.exports = merge(baseConfig, process.env.NODE_ENV === 'development' ? devConfig : prodConfig)
