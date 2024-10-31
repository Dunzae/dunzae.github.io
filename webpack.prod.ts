import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
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
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@slices': path.resolve(__dirname, 'src/slices'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
        }
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