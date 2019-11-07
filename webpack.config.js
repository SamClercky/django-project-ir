const path = require("path");

module.exports = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, 'blog/static/blog/js'),
        filename: "index.bundle.js"
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