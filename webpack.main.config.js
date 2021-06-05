/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
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
};
