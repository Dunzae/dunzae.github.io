import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import dotenv from "dotenv";
import { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

dotenv.config({ path: './.env.production' });

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
    },
    plugins: [
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new DefinePlugin({
            "process.env": JSON.stringify(process.env),
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css?$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@slices': path.resolve(__dirname, 'src/slices'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
        }
    },
    optimization : {
        minimizer : [
            new CssMinimizerPlugin()
        ]
    },
    
}