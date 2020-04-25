const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        main: "./main.js",
        vendor: "./vendor.js"
    },
    target: "node",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
      },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
 
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    }
};