import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

export default config;