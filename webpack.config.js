/* eslint-disable @typescript-eslint/no-var-requires */
const rendererWebpackConfig = require("./webpack.renderer.config");
const mainWebpackConfig = require("./webpack.main.config");

module.exports = [
    rendererWebpackConfig,
    mainWebpackConfig
];
