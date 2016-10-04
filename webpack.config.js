module.exports = {
    entry: './src/js/index.ts',
    output: {
        path: __dirname + "/dist",
        filename: 'output.js',
        libraryTarget: 'umd',
        library: 'Kinematics'
    },
    module: {
        loaders: [
            // note that babel-loader is not required
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                exclude: /node_modules/,
                loader: ['babel'], // The module to load. "babel" is short for "babel-loader"
                query: {
                    presets: ['es2015']
                },
                "plugins": []
            },
        ]
    },

}