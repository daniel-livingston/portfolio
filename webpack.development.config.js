const path = require("path");

module.exports = () => {
	return {
		mode: "development",
		entry: {
			index: { import: "./src/index.js" },
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].bundle.js",
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ["babel-loader"],
				},
				{
					test: /\.s?css$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
			],
		},
		devtool: "eval-cheap-module-source-map",
		devServer: {
			contentBase: "./public",
			publicPath: "/dist/",
			port: 3000,
			historyApiFallback: true,
		},
	};
};
