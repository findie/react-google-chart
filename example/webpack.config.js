var webpack = require('webpack');

var config = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + "/build",
        filename: "index.js"
    },
    target: "web",
    plugins: [],
    module: {
        loaders: [
            {test: /\.jsx$/, loader: "babel-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

webpack(config, function(err, data){
    "use strict";
    console.log(err || data);
});

module .exports = config;