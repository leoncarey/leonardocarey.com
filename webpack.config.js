const path = require('path'),
	HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
	target: 'web',

	entry: [
		'./src/index.js'
	],

	output: {
		path: __dirname + '/dist',
		filename: "src/assets/js/bundle.js"
	},

	module: {
		rules: [
			// JS
			{
				test: /\.(js|jsx)$/,
				loaders: 'babel-loader',
				include: path.join(__dirname, 'src')
			},

			// LESS
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: "[local]___[hash:base64:5]"
						}
					},
					{
						loader: "less-loader"
					}
				]
			},

			// CSS Normalizer
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						}
					}
				]
			},

			// Image
			{
				test: /\.(jpe?g|png|gif|cur|mp3|svg)$/i,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name]-[hash:8].[ext]'
						}
					}
				]
			}
		]
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: __dirname + "/src/index.html",
			filename: "index.html",
			inject: 'body'
		})
	],

	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	}
};

module.exports = config;