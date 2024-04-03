/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
    entry: "./index.html",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            }
        ],
    },
    resolve: {
        extensions: [".js"],
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
};
