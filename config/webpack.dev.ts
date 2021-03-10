import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import common from './webpack.common';


const config: webpack.Configuration = merge(common, {
  mode: "development",
  output: {
    publicPath: "",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true
  },
});

export default config;