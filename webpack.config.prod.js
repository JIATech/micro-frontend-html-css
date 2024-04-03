/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new CopyPlugin({
            patterns: [
                { from: "img", to: "img" },
                { from: "css", to: "css" },
                { from: "scss", to: "scss" },
                { from: "assets", to: "assets" },
                { from: "icon.svg", to: "icon.svg" },
                { from: "favicon.ico", to: "favicon.ico" },
                { from: "robots.txt", to: "robots.txt" },
                { from: "icon.png", to: "icon.png" },
                { from: "404.html", to: "404.html" },
                { from: "site.webmanifest", to: "site.webmanifest" },
            ],
        }),
    ],
});
