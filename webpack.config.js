const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './index.html'), 
	filename: './index.html',
})

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	module: {
		rules: [ 
			{ test: /\.css$/, loader: ['style-loader', 'css-loader']},
			{ test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },			
		]
	},
	plugins: [ htmlWebpackPlugin ],
	resolve: {
		extensions: ['.js','.json']
	},
	devServer: {
		port: 3001
	}
}