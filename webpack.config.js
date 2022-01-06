const path = require("path");

module.exports = {
	devtool: "eval-source-map",
	mode: "development",
	entry: {
		index: "./src/index.ts",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		devMiddleware: {
			publicPath: "/",
		},
		hot: "only",
	},
	output: {
		publicPath: "public",
		filename: "[name].js",
		path: path.resolve(__dirname, "public"),
	},
};
