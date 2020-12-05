const path = require("path");
const Webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
// For dev server
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, options) => {
    const devMode = options.mode !== 'production';

    return {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /bootstrap|react|react-dom/,
                        chunks: "initial",
                        name: "vendor",
                        enforce: true
                    }
                }
            },
            minimizer: [
                new TerserPlugin({}),
                new CssMinimizerPlugin({})
            ]
        },
        entry: {
            app: "./src/index.js",
        },
        output: {
            filename: "js/[name].js",
            path: path.resolve(__dirname, "../priv/static"),
            publicPath: '/'
        },
        devtool: devMode ? 'eval-cheap-module-source-map' : undefined,

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                // Load stylesheets
                {
                    test: /\.(css|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ]
                },
                // Load images
                {
                    test: /\.(png|svg|jpe?g|gif)(\?.*$|$)/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                // Relative to output public_path
                                outputPath: "./images/"
                            }
                        }
                    ]
                },
                // Load fonts
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                // Relative to output public_path
                                outputPath: "./fonts/"
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html",
                inject: "body",
            }),
            new MiniCssExtractPlugin({ filename: "./css/app.css" }),
            new Webpack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin({
                patterns: [{ from: "static/", to: "./" }]
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            historyApiFallback: true,
            compress: true,
            open: true,
            hot: true,
            overlay: true,
            // port: 8080,
        }
    }
};
