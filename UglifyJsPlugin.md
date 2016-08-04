
# UglifyJsPlugin （webpack内置插件之一）
``new webpack.optimize.UglifyJsPlugin([options])``

最小化所有javascript块的输出。loaders加载器切换为最小化模式。可以通过传递一个对象参数，其中包含了uglifyJS的配置项

    new webpack.optimize.UglifyJsPlugin({
	    compress: {
	        warnings: false
	    }
	})

## 参数 Parameters

更多参数介绍可查询[第一份文档](https://github.com/lylpixin2121/TweenLite)