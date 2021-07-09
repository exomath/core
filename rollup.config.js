import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import replace from '@rollup/plugin-replace';
import visualizer from 'rollup-plugin-visualizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'lib/index.js',

  output: {
    dir: 'dist',
    format: 'esm'
  },

  plugins: [
    // Locate modules from node_modules
    nodeResolve({
      browser: true
    }),

    // Convert CommonJS to ESM like:
    //   const foo = require('foo'); ==> import foo from 'foo';
    commonjs(),

    // Replace targeted strings in files like:
    //   'process.env.NODE_ENV' ==> process.env.NODE_ENV
    //
    // The above example is done because 'process' is not valid client-side.
    replace({ 
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),

    // Copy files and folders
    copy({
      targets: [
        { src: 'repl.html', dest: 'dist', rename: 'index.html' }
      ]
    }),

    // Display the file size
    filesize(),

    // Create visualizations for the bundle
    visualizer({
      filename: `./visualizer-sunburst.html`,
      template: 'sunburst'
    }),
    visualizer({
      filename: `./visualizer-treemap.html`,
      template: 'treemap'
    }),
    visualizer({
      filename: `./visualizer-network.html`,
      template: 'network'
    })
  ]
};
