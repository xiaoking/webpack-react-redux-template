var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var extend = require('extend');
var entry = require('./src/config/vendor');
var externals = require('./src/config/externals');
var config = require('./src/config/base.config');
var alias = require('./src/config/alias.json');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CortexRecombinerPlugin=require('cortex-recombiner-webpack-plugin');
//?presets[]=stage-0,presets[]=react,presets[]=es2015

var setExternals= function() {
    var external=externals;

    return external;
};

var baseFileDir = path.join(process.cwd(), 'src/');

var getEntry = function(){
    var basedir =baseFileDir+'entries';
    var files = glob.sync(path.join(basedir, '*.jsx'));

    var webpackConfigEntry = {};//webpackConfig.entry || (webpackConfig.entry = {});

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file);
        webpackConfigEntry[relativePath.replace(/\.jsx/,'').toLowerCase()] = file;
    });
    return webpackConfigEntry;
};


function setCommonsChuck(){
    var arr=[];
    for(var item in entry){
        arr.push(item);
    }
    return arr;
}

//extend(getEntry(),entry||{}),
var entryList =config.projectType=='app'? extend(getEntry(),entry||{}) : extend({bundle:path.join(__dirname, 'src/index.jsx')},entry||{});

var webpackConfig = {
    entry: entryList,
    output: {
        path:path.join(__dirname, config.output.replace('./','') ),
        filename: '[name].js',
        libraryTarget: "umd",
        publicPath: config.cdn.beta,
        chunkFilename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    cache: true,
    devtool: 'source-map',
    externals:setExternals(),
    resolve: {
        extensions: ['', '.js'],
        alias:extend({},alias ||{})
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|es6)$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.(less$)$/,
                loader: ExtractTextPlugin.extract("css!postcss!less")
                //loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?-restructuring!postcss')
            },
            {
                test: /\.css\.module/,
                loader:  ExtractTextPlugin.extract('css?-restructuring&modules&localIdentName=[local]___[hash:base64:5]!postcss')
            },
            {
                test: /\.less\.module/,
                loader:  ExtractTextPlugin.extract('css?modules&localIdentName=[local]___[hash:base64:5]!postcss!less')

            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.woff|ttf|woff2|eot$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=35000'/*,
                    'image-webpack?progressive&optimizationLevel=3&interlaced=false'*/
                ]
            },
            {
                test: /\.html$/,
                loader: "handlebars-loader"
            }
        ]
    },
    /*postcss: [
        require('autoprefixer'),
        require('postcss-color-rebeccapurple')
    ],*/
    postcss: function () {
        //处理css兼容性代码，无须再写-webkit之类的浏览器前缀
        return [
            require('postcss-initial')({
                reset: 'all' // reset only inherited rules
            }),
            require('autoprefixer')({
                browsers: ['> 5%']
            })];
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name].css", {
            disable: false,
            allChunks: true
        }),
        new CortexRecombinerPlugin({
            base:__dirname//path.resolve(__dirname,relativeToRootPath),//项目根目录的绝对路径
        }),
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(config.env!='pro'?'development':'production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity

        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};


module.exports = webpackConfig;
