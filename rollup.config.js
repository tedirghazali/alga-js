import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'js/app.js',
  output: [
    {
      file: 'dist/alga.js',
      format: 'es'
    },
    {
      file: 'dist/alga-common.js',
      format: 'cjs'
    },
    {
      file: 'dist/alga.min.js',
      format: 'iife',
      name: 'alga',
      plugins: [terser()]
    }
  ],
  plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
};
