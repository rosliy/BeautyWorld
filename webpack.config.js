const isProduction = process.env.NODE_ENV == 'production';
const TerserPlugin = require('terser-webpack-plugin');




module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isProduction ? 'none' : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: isProduction,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};

