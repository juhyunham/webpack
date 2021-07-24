const path = require(`path`)
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/test.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname + "/build")
	},
	mode: "none",
	module: {
		rules: [
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