# webpack常用配置说明(遇到问题)

webpack常见配置说明

    module.exports = {
		entry : "./index.js",
		output : {
			path : __dirname,
			filename : "boundle.js"
		},
		module:{
			loaders :[
				{test : /\.css$/,loader :'style-loader!css-loader'},
				{test:/\.(png|jpg)$/,loader : 'url-loader?limit=8192'}
			]
		}
	}


## 配置项

``entry`` : 入口文件，所有的业务逻辑基本都是从这里输入；入口文件可以指定多个，以对象形式，每个属性又支持数组形式
``output`` : 对应的输出项，可以配置输出的路径地址，可以指定文件名，其中[name]对应的是entry对象中的key值，生成对应多个，如下所示

    {
	    entry: {
	        page1: "./page1",
	        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
	        page2: ["./entry1", "./entry2"]
	    },
	    output: {
	        path: "dist/js/page",
	        filename: "[name].bundle.js"
	    }
	}

``module.loaders`` : 最重要的一环节，模块加载器，以数组形式支持，告知webpack每种文件用什么加载器来处理 

常用的加载器有：
1、处理css常用的style-loader和css-loader
2、处理图片转base64的有url-loader,目前测试支持转通过脚本写入或者是require css里的内容


