import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv";
import { DefinePlugin } from 'webpack';

dotenv.config({ path: './.env.production' });

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader', "postcss-loader"],
            },

        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new DefinePlugin({
            "process.env" : JSON.stringify(process.env),
        })
    ]
}