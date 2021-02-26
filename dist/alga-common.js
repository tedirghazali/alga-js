"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:255,e=Number(r)+1;return Math.floor(Math.random()*e)}},e={random:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e="",t="0123456789",n=0;n<r;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},t={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"basic",t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";"hex"===e?n="0123456789abcdef":"password"===e&&(n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?");for(var o=0;o<r;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}},n={split:function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];return"string"==typeof r&&(e>=1&&n.push(r.slice(0,e)),null!==t?(n.push(r.slice(e,t)),n.push(r.slice(t))):n.push(r.slice(e))),n}}};function o(r){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function i(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function u(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var u,f=r[Symbol.iterator]();!(n=(u=f.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(r){o=!0,i=r}finally{try{n||null==f.return||f.return()}finally{if(o)throw i}}return t}(r,e)||a(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r){return function(r){if(Array.isArray(r))return c(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||a(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(r,e){if(r){if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(r,e):void 0}}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var l=function(){function r(e,t){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.valArr=e,this.toArr=t}var e,t,n;return e=r,(t=[{key:"first",value:function(){return[].concat(f(this.valArr),f(this.toArr))}},{key:"last",value:function(){return[].concat(f(this.toArr),f(this.valArr))}},{key:"before",value:function(r){var e=isNaN(r)?1:r;return this.toArr.splice(Number(e)-1,0,this.valArr),this.toArr.flat()}},{key:"after",value:function(r){var e=isNaN(r)?0:r;return this.toArr.splice(Number(e)+1,0,this.valArr),this.toArr.flat()}}])&&i(e.prototype,t),n&&i(e,n),r}(),s={insert:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];if(e){var n=function(r){if("object"===o(r)){var t=Array.from(r);return new l(e,t)}};return n}},toggle:function(r){return function(e){var t=Array.from(e);if(t.includes(r)){var n=t.findIndex((function(e){return e===r}));t.splice(n,1)}else t.push(r);return t}},flatten:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n={};n.id=e.id||"id",n.parent=e.parent||"parent",n.children=e.children||"children";var i=function(){Array.from(r).forEach((function(r){if("object"===o(r)&&null!==r){var e=r;e[n.parent]="0","object"===o(e[n.children])&&Array.isArray(e[n.children])&&(u(e[n.children],r),delete e[n.children]),t.push(e)}}))},u=function r(e,i){e.length>=1&&Array.from(e).forEach((function(e){if("object"===o(e)&&null!==e){var u=e;u[n.parent]=i[n.id],"object"===o(u[n.children])&&Array.isArray(u[n.children])&&(r(u[n.children],e),delete u[n.children]),t.push(u)}}))};return i(),t},nested:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n=Array.from(r),i={};i.id=e.id||"id",i.parent=e.parent||"parent",i.children=e.children||"children";var u=function(r){r.forEach((function(r){if("object"===o(r)&&null!==r){var e=null;("string"==typeof r[i.parent]&&"0"===r[i.parent]||"number"==typeof r[i.parent]&&0===r[i.parent])&&(e=f(r)),null!==e&&t.push(e)}}))},f=function(r){var e=r;return void 0!==r[i.children]&&null!==r[i.children]||(e[i.children]=a(r[i.id]),e[i.children].length<=0&&delete e[i.children]),delete e[i.parent],e},a=function(r){var e=[];return c(r).length>=1&&c(r).forEach((function(r){e.push(f(r))})),e},c=function(r){return n.filter((function(e){return e.parent===r}))};return u(n),t},index:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Array.from(r),n={};return n.key=e.key||"id",n.value=e.value||0,t.length>=1?t.findIndex((function(r){return r[n.key]===n.value})):0},search:function(r){if("string"==typeof r)return function(e){if("object"===o(e))return Array.from(e).filter((function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var o=u(n[t],2),i=o[0],f=o[1];if("string"==typeof e[i]&&-1!==f.toLowerCase().indexOf(r.toLowerCase()))return!0;if("number"==typeof e[i]&&f===Number(r))return!0}return!1}))}},filtered:function(r){if("string"==typeof r)return function(e,t){if("object"===o(e))return Array.from(e).filter((function(e){for(var n=0,o=Array.from(t);n<o.length;n++){var i=o[n];if(i in e){if("string"==typeof e[i]&&-1!==e[i].toLowerCase().indexOf(r.toLowerCase()))return!0;if("number"==typeof e[i]&&e[i]===Number(r))return!0}}return!1}))}},sort:function(r,e){if("object"===o(r)&&"string"==typeof e){var t=Array.from(r);return"asc"===e?t.sort((function(r,e){if("number"==typeof r&&"number"==typeof e)return r-e;if("string"==typeof r&&"string"==typeof e){var t=r.toLowerCase(),n=e.toLowerCase(),o=0;return t<n?o=-1:t>n&&(o=1),o}})):"desc"===e&&t.sort((function(r,e){if("number"==typeof r&&"number"==typeof e)return e-r;if("string"==typeof r&&"string"==typeof e){var t=r.toLowerCase(),n=e.toLowerCase(),o=0;return n<t?o=-1:n>t&&(o=1),o}})),t}},sorted:function(r){if("object"===o(r))return function(e,t){if("string"==typeof e&&"string"==typeof t){var n=Array.from(r);return"asc"===t?n.sort((function(r,t){if(e in r&&e in t&&"number"==typeof r[e]&&"number"==typeof t[e])return r[e]-t[e];if(e in r&&e in t&&"string"==typeof r[e]&&"string"==typeof t[e]){var n=r[e].toLowerCase(),o=t[e].toLowerCase(),i=0;return n<o?i=-1:n>o&&(i=1),i}})):"desc"===t&&n.sort((function(r,t){if(e in r&&e in t&&"number"==typeof r[e]&&"number"==typeof t[e])return t[e]-r[e];if(e in r&&e in t&&"string"==typeof r[e]&&"string"==typeof t[e]){var n=r[e].toLowerCase(),o=t[e].toLowerCase(),i=0;return o<n?i=-1:o>n&&(i=1),i}})),n}}},paginate:function(r){if("object"===o(r))return function(e,t){if("number"==typeof e&&"number"==typeof t){var n=Array.from(r),o=Number(t)*Number(e)-(Number(t)-1),i=Number(t)*Number(e);return n.slice(o-1,i<=n.length?i:n.length)}}},pages:function(r,e){if("object"===o(r)&&"number"==typeof e){var t=Array.from(r).length/Number(e);return Number.isInteger(t)?t:Number(Number.parseFloat(t).toFixed(0))+1}},show:function(r){if("object"===o(r))return function(e,t){if("number"==typeof e&&"number"==typeof t){var n=Array.from(r),o=Number(t)*Number(e)-(Number(t)-1),i=Number(t)*Number(e);return{from:o,to:i<=n.length?i:n.length,of:n.length}}}},pagination:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("number"==typeof r){var n=[],o=Number(r)<Number(e)?Number(r):Number(e),i=Number(e)<1?1:Number(e),u=o+Number(t),f=i-Number(t);if(0===Number(t))for(var a=1;a<=Number(r);a++)n.push(a);else{if(i>1)for(var c=f;c<i;c++)n.push(c);for(var l=o;l<=u;l++)n.push(l)}var s=n.filter((function(r){return r>0})),h=s.filter((function(e){return e<=Number(r)}));return u<Number(r)&&0!==Number(t)&&h.push("..."),f>1&&0!==Number(t)&&h.unshift("..."),h}}},h={size:function(r,e){if(0===r)return"0 Bytes";var t=e||1,n=Math.floor(Math.log(r)/Math.log(1e3));return parseFloat((r/Math.pow(1e3,n)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},name:function(r){if("string"==typeof r)return r.indexOf("",41)>40?r.slice(0,41)+"...":r},type:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"type",t=r.split("/");return"format"==e?t.shift():t.pop(),t.join("")},image:function(r){if("name"in r&&"string"==typeof r.name)return URL.createObjectURL(r)},date:function(r){return new Date(r).toDateString()},loadImage:function(r){"name"in r&&"string"==typeof r.name&&URL.revokeObjectURL(r)},formatSize:function(r){for(var e=0,t=r,n=t.length,o=0;o<n;o++)e+=t[o].size;for(var i=e+" bytes",u=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],f=0,a=e/1024;a>1;a/=1024,f++)i=a.toFixed(3)+" "+u[f]+" ("+e+" bytes)";return i},humanSize:function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(r)<n)return r+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1,u=Math.pow(10,t);do{r/=n,++i}while(Math.round(Math.abs(r)*u)/u>=n&&i<o.length-1);return r.toFixed(t)+" "+o[i]}};exports.$array=s,exports.$char=t,exports.$file=h,exports.$int=r,exports.$number=e,exports.$string=n;
