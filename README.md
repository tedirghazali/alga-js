<p align="center" style="text-align: center">
  <a href="https://tedirghazali.gitbook.io/algajs/" target="_blank" rel="noopener noreferrer">
    <img width="180" src="alga-js-logo.png" alt="Alga.js logo">
  </a>
</p>

<p align="center" style="text-align: center">
  <a href="https://npmcharts.com/compare/alga-js?minimal=true"><img src="https://img.shields.io/npm/dm/alga-js.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/alga-js"><img src="https://img.shields.io/npm/v/alga-js.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/alga-js"><img src="https://img.shields.io/npm/l/alga-js.svg?sanitize=true" alt="License"></a>
</p>
<br/>

# Alga.js
Alga.js is a JavaScript helper to help build UI components by using any of modern web frameworks or libraries, especially the frameworks that we currently use like Vue, Petite-Vue, Alpine.js and Vanilla Web Components to produce our custom elements, see [the documentation here](https://tedirghazali.gitbook.io/algajs/) or visit this link `tedirghazali.gitbook.io/algajs`.

## Installation
This Alga.js is a pure JavaScript plugin, so it doesn't have any dependencies and you can install it by using NPM or Yarn.

```sh
npm install alga-js

#or

yarn add alga-js
```

## Usage
You may want to use one of two JS modules either you use ES module or UMD module, ES module is highly recommended for using alongside modern web frameworks, but if you want it to run in the browser or in a server side, UMD module is the option.

```js
// ES modules
import { array, object, string, number, func, date, ...others* } from 'alga-js' // or
import * as $ from 'alga-js'

// Node/CommonJS modules
const $ = require('alga-js')

// UMD (AMD/IIFE)
//<script src="alga-umd.js"></script>

// Obsolete or deprecated
import { $array, $object, $string, ... } from 'alga-js' // or
import * as _ from 'alga-js' // or
import * as Alga from 'alga-js'

// Tree-shakable
import { paginate, pages, ... } from 'alga-js/lib/array.js'
import { weeks } from 'alga-js/lib/date.js' // or
import { ...[helperMethod]* } from 'alga-js/lib/[helperFile].js'
```
