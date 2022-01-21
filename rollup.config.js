import { terser } from 'rollup-plugin-terser'
//import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  /*{
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
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/umd.js',
    output: {
      file: 'dist/alga-umd.js',
      format: 'umd',
      name: '$',
      plugins: [terser()]
    },
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/array/array.js',
    output: {
      file: 'lib/array.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/object/object.js',
    output: {
      file: 'lib/object.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  },
  {
    input: 'js/string/string.js',
    output: {
      file: 'lib/string.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  },*/
  {
    input: 'ts/date/date.ts',
    output: [
      {
        file: 'lib/date.es.js',
        format: 'es'
      },
      {
        file: 'lib/date.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/date.js',
        format: 'iife',
        name: 'date',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
  /*{
    input: 'js/number/number.js',
    output: {
      file: 'lib/number.js',
      format: 'es',
      plugins: [terser()]
    },
    plugins: [ babel({ babelHelpers: 'bundled' }) ]
  }*/
];
