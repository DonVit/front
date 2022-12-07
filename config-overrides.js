const webpack = require('./node_modules/webpack')
module.exports = function override(config, env) {
    // prevent creation of chunk file which fail to load on ubuntu
    config.plugins = [
        ...config.plugins,
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          }),
    ]

    return config;
};