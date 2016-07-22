var config = require('./src/config/base.config');
var webpackConfig = require('./webpack.config');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var gutil = require("gulp-util");
var CortexRecombinerPlugin=require('cortex-recombiner-webpack-plugin');

module.exports= function(){

    var devPort = config.devPort;
    var wbpk = Object.create(webpackConfig);

//环境
    var mainIndex = './src/index.jsx';

    wbpk.devtool = 'eval';

    wbpk.entry = [
        'webpack-dev-server/client?http://127.0.0.1:' + devPort,
        'webpack/hot/only-dev-server',
        mainIndex
    ];
    wbpk.module.loaders = [
        {
            test: /date-time\.js$/,
            loaders: ['muiLocal', 'babel']
        },
        {
            test: /\.(jsx|es6)$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader:  "style!css?-restructuring!postcss"
        }, {
            test: /\.css\.module/,
            loader: "style!css?-restructuring&modules&localIdentName=[local]___[hash:base64:5]!postcss"
        }, {
            test: /\.woff|ttf|woff2|eot$/,
            loader: 'url?limit=100000'
        }, {
            test: /\.less$/,
            loader: "style!css!postcss!less"
        }, {
            test: /\.less\.module/,
            loader: "style!css?modules&localIdentName=[local]___[hash:base64:5]!postcss!less"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ["url?limit=25000"]
        },
        {
            test: /\.html$/,
            loader: "handlebars-loader"
        }
    ];
    wbpk.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new CortexRecombinerPlugin({
            base:__dirname//path.resolve(__dirname,relativeToRootPath),//项目根目录的绝对路径
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery"
        })
    ];
    wbpk.externals=null;
    wbpk.resolve.extensions = ['', '.js', '.jsx'];
    wbpk.output={
        libraryTarget: 'umd',
        path:path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: config.cdn.dev
    };
    var compiler = webpack(wbpk);

    new WebpackDevServer(compiler, {
        publicPath: config.cdn.dev,
        hot: true,
        historyApiFallback: true,
        port: devPort,
        stats: {
            colors: true
        }
    }).listen(devPort, "127.0.0.1", function (err) {
            if (err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://127.0.0.1:" + devPort +config.defaultStartPage );
        });
};
