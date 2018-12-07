const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {loader: "url-loader"}
                ]
            },
            {

            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.bundle.js"
        })
    ]
}