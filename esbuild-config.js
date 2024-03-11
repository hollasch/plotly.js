var glsl = require('esbuild-plugin-glsl').glsl;
var environmentPlugin = require('esbuild-plugin-environment').environmentPlugin;
var umdWrapper = require('esbuild-plugin-umd-wrapper').umdWrapper;
var es5Plugin = require('esbuild-plugin-es5').es5Plugin;

module.exports = {
    entryPoints: ['./lib/index.js'],
    format: 'cjs',
    globalName: 'Plotly',
    bundle: true,
    minify: false,
    sourcemap: false,
    plugins: [
        glsl({
            minify: true,
        }),
        environmentPlugin({
            NODE_DEBUG: false,
        }),
        es5Plugin(),
        umdWrapper({
            libraryName: 'Plotly'
        })
    ],
    alias: {
        stream: 'stream-browserify',
    },
    define: {
        global: 'window',
    },
    target: 'es5',
    logLevel: 'info',
};
