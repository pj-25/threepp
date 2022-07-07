const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/Threepp.js",
    output: {
        path: path.resolve('dist'),
        filename: "threepp.js"
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js']
    }
};