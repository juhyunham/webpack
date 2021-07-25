const path = require(`path`)
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
		})
	]
	};