import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'js/app.js',
    output: [
      {
        file: 'dist/alga.js',
        format: 'es'
      },
      {
        file: 'dist/alga.min.js',
        format: 'es',
        plugins: [terser()]
      }
    ],
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/umd.js',
    output: {
      file: 'dist/alga-umd.js',
      format: 'umd',
      name: '$',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/array/array.js',
    output: {
      file: 'lib/array.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/object/object.js',
    output: {
      file: 'lib/object.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/string/string.js',
    output: {
      file: 'lib/string.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/date/date.js',
    output: {
      file: 'lib/date.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/number/number.js',
    output: {
      file: 'lib/number.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ resolve(), babel({ babelHelpers: 'bundled' }) ]
  }
];
