import type { Configuration } from "webpack";
import path from "path";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "postcss-loader" },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias: {
      "@/config": path.resolve(__dirname, "config"),
      "@/renderer": path.resolve(__dirname, "src/renderer"),
      "@/components": path.resolve(__dirname, "src/renderer/components"),
      "@/styles": path.resolve(__dirname, "src/renderer/styles"),
      "@/views": path.resolve(__dirname, "src/renderer/views"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
