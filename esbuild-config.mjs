import { glsl } from 'esbuild-plugin-glsl';
import { glslify } from 'esbuild-plugin-glslify';
import { glslifyInline } from 'esbuild-plugin-glslify-inline'
import { environmentPlugin } from 'esbuild-plugin-environment';

export default {
    entryPoints: ['./lib/index.js'],
    outfile: './build/plotly.js',
    format: 'iife',
    globalName: 'Plotly',
    bundle: true,
    minify: false,
    sourcemap: false,
    plugins: [
        glslify({
            extensions: [ 'glsl' ],
            compress: false
        }),
        glslifyInline({
            compress: false
        }),
        glsl({
            minify: false
        }),
        environmentPlugin({
            NODE_DEBUG: false
        }),
    ],
    alias: {
        stream: 'stream-browserify',
    },
    define: {
        global: 'window',
    },
    target: 'es2016',
    logLevel: 'info',
};
