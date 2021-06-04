/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        mode: "development",
        entry: "./src/main.ts",
        target: "electron-main",
        module: {
            rules: [{
                test: /\.ts$/,
                use: "ts-loader",
                include: /src/
            }]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        }
    },
    {
        mode: "development",
        entry: "./src/index.tsx",
        target: "electron-renderer",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: "ts-loader",
                    include: /src/
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
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
            })
        ]
    }
];