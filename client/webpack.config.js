const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
                test: /\.s?css$/,
                use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		port: 3000,
		proxy: {
		  "/api": "http://localhost:8080"
		}
  }
};
