'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var InsertArray = /*#__PURE__*/function () {
  function InsertArray(value) {
    var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, InsertArray);

    _defineProperty(this, "errormsg", 'You have to enter the data in array type');

    this.value = value;
    this.array = array;
  }

  _createClass(InsertArray, [{
    key: "first",
    value: function first() {
      if (Array.isArray(this.array)) {
        return this.array.unshift(this.value);
      } else {
        throw this.errormsg;
      }
    }
  }, {
    key: "last",
    value: function last() {
      if (Array.isArray(this.array)) {
        return this.array.push(this.value);
      } else {
        throw this.errormsg;
      }
    }
  }, {
    key: "before",
    value: function before() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (Array.isArray(this.array)) {
        return this.array.splice(index - 1, 0, this.value);
      } else {
        throw this.errormsg;
      }
    }
  }, {
    key: "after",
    value: function after() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (Array.isArray(this.array)) {
        return this.array.splice(index + 1, 0, this.value);
      } else {
        throw this.errormsg;
      }
    }
  }, {
    key: "multiple",
    value: function multiple() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'last';
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (Array.isArray(this.value) && Array.isArray(this.array)) {
        if (position === 'first') {
          return [].concat(_toConsumableArray(this.value), _toConsumableArray(this.array));
        } else if (position === 'last') {
          return [].concat(_toConsumableArray(this.array), _toConsumableArray(this.value));
        } else if (position === 'before') {
          var multiBefore = this.array.splice(index - 1, 0, this.value);
          return multiBefore.flat();
        } else if (position === 'after') {
          var multiAfter = this.array.splice(index + 1, 0, this.value);
          return multiAfter.flat();
        }
      } else {
        throw this.errormsg;
      }
    }
  }]);

  return InsertArray;
}();

var insert = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': InsertArray
});

var array = {
  insert: insert
};

var getFileSize = function getFileSize(bytes, decimalPoint) {
  if (bytes === 0) return '0 Bytes';
  var k = 1000;
  var dm = decimalPoint || 1;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

var getFileName = function getFileName(val) {
  if (typeof val === 'string') {
    if (val.indexOf('', 41) > 40) {
      return val.slice(0, 41) + "...";
    } else {
      return val;
    }
  }
};

var getFileType = function getFileType(val) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'type';
  var arrFile = val.split('/');

  if (type == 'format') {
    arrFile.shift();
  } else {
    arrFile.pop();
  }

  return arrFile.join("");
};

var getFileImage = function getFileImage(image) {
  if ('name' in image && typeof image.name === 'string') {
    return URL.createObjectURL(image);
  }
};

var loadFileImage = function loadFileImage(image) {
  if ('name' in image && typeof image.name === 'string') {
    URL.revokeObjectURL(image);
  }
};
/* Alternative */


var formatFileSize = function formatFileSize(file) {
  var nBytes = 0,
      oFiles = file,
      nFiles = oFiles.length;

  for (var nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }

  var sOutput = nBytes + " bytes";
  var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

  for (var nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }

  return sOutput;
};

var humanFileSize = function humanFileSize(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  var r = Math.pow(10, dp);

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return bytes.toFixed(dp) + ' ' + units[u];
};

function $file() {
  return {
    getFileSize: getFileSize,
    getFileName: getFileName,
    getFileType: getFileType,
    getFileImage: getFileImage,
    loadFileImage: loadFileImage,
    formatFileSize: formatFileSize,
    humanFileSize: humanFileSize
  };
}

exports.$array = array;
exports.$file = $file;
