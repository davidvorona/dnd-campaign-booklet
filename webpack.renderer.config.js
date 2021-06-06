/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/renderer",
    target: "electron-renderer",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: "ts-loader",
                include: /src/,
                exclude: /src\/main/
            },
            {
                test: /\.css$/i,
                // CSS must be extracted to separate file to avoid
                // CSP violations without compromising on security
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "renderer.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ]
};
