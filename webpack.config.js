const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: {
        "index": "./src/index.ts",
    },
    output: {
        path: path.join(__dirname, 'blog/static/blog/js'),
        filename: "[name].bundle.js"
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
};