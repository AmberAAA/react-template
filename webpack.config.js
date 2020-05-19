const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

console.log

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'asd.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}