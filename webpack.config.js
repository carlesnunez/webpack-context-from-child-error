const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (scripts) =>({
    mode : 'development',
    devtool : 'eval-cheap-module-source-map',
    entry : './src/index',
    output : {
        path       : path.join(__dirname, 'build'),
        filename   : '[name]-[chunkhash].js',
        publicPath : '/'
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
    module : {
        rules : [{
            test : /\.jsx?$/,
            use  : [{
                loader  : 'babel-loader',
                options : {
                    presets : [
                        ['@babel/preset-env', {
                            targets : {
                                browsers : 'last 2 versions'
                            }
                        }],
                        '@babel/preset-react'
                    ]
                }
            }],
            include : path.join(__dirname, 'src')
        }]
    }
});
