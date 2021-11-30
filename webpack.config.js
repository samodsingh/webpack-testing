const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry:['./src/index.js','./src/index1.js',],

  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
     // CSS loader heregit
     {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
 }, optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
 plugins: [
    new MiniCssExtractPlugin(),
  ],
};