const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // whenever webpack run, save the file, call it bundle.js inside of a path of
        filename: 'bundle.js', // our project directory in a file called build
        publicPath: 'build/'  // used by the url loader. Actually, any loader will use it if they need to access a file in output directory
    },
    module: {
        rules: [
            {
                use: 'babel-loader',  // use babel with webpack
                test: /\.js$/ // only js files
            },
            {
                loader: ExtractTextPlugin.extract({ // legacy way to use loader because of this plugin constraint
                    loader: 'css-loader'
                }),
                // use: ['style-loader', 'css-loader'], // first css-loader will be applied, and then style-loader ( from right to left )
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: { limit: 40000 }  // if gt than 40 kb, do not handle with this loader
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;