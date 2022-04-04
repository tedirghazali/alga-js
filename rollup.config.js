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
        file: 'lib/date/date.es.js',
        format: 'es'
      },
      {
        file: 'lib/date/date.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/date/date.js',
        format: 'iife',
        name: 'date',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
  {
    input: 'ts/number/number.ts',
    output: [
      {
        file: 'lib/number/number.es.js',
        format: 'es'
      },
      {
        file: 'lib/number/number.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/number/number.js',
        format: 'iife',
        name: 'number',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
  {
    input: 'ts/array/array.ts',
    output: [
      {
        file: 'lib/array/array.es.js',
        format: 'es'
      },
      {
        file: 'lib/array/array.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/array/array.js',
        format: 'iife',
        name: 'array',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
  {
    input: 'ts/object/object.ts',
    output: [
      {
        file: 'lib/object/object.es.js',
        format: 'es'
      },
      {
        file: 'lib/object/object.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/object/object.js',
        format: 'iife',
        name: 'object',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
  {
    input: 'ts/string/string.ts',
    output: [
      {
        file: 'lib/string/string.es.js',
        format: 'es'
      },
      {
        file: 'lib/string/string.cjs.js',
        format: 'cjs'
      },
      {
        file: 'lib/string/string.js',
        format: 'iife',
        name: 'string',
        plugins: [terser()]
      }
    ],
    plugins: [ nodeResolve({ extensions: ['.js', '.ts'] }), typescript() ]
  },
];
