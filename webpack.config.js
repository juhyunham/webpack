const path = require(`path`)
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname + "/build")
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: `/node_modules`,
				use: [
					`babel-loader`
				]
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader']
				}
			{
				test: /\.ejs$/,
				use: [
					{
						loader: "html-loader",
						options: { 
							minimize: true 
						}
					},
					`ejs-plain-loader`
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.ejs', 
			filename: 'index.html' 
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css' 
		})
	]
};