const path = require('path');

const config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'), // whenever webpack run, save the file, call it bundle.js inside of a path of
        filename: 'bundle.js' // our project directory in a file called build
    }

};

module.exports = config;