var random = function random() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var outputChar = '';
  var basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i < size; i++) {
    outputChar += basicChar.charAt(Math.floor(Math.random() * basicChar.length));
  }

  return outputChar;
};

var char = {
  random: random
};

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

var errorMsg = 'You have to enter the value before using this insert array utility';

var insert = function insert(value) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var at = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'last';
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;
  if (!value) return function (e) {
    throw e;
  }(Error(errorMsg));
  var toArr = Array.from(to);

  if (at === 'first') {
    toArr.unshift(value);
  } else if (at === 'last') {
    toArr.push(value);
  } else if (at === 'before') {
    var indBe = isNaN(index) ? 1 : index;
    toArr.splice(Number(indBe) - 1, 0, value);
  } else if (at === 'after') {
    var indAf = isNaN(index) ? 0 : index;
    toArr.splice(Number(indAf) + 1, 0, value);
  }

  return toArr;
};

var insertArray = function insertArray(from) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var at = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'last';
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;
  if (!from) return function (e) {
    throw e;
  }(Error(errorMsg));
  var toArr = Array.from(to);

  if (at === 'first') {
    toArr = [].concat(_toConsumableArray(from), _toConsumableArray(toArr));
  } else if (at === 'last') {
    toArr = [].concat(_toConsumableArray(toArr), _toConsumableArray(from));
  } else if (at === 'before') {
    var indBe = isNaN(index) ? 1 : index;
    toArr.splice(Number(indBe) - 1, 0, from);
    toArr = toArr.flat();
  } else if (at === 'after') {
    var indAf = isNaN(index) ? 0 : index;
    toArr.splice(Number(indAf) + 1, 0, from);
    toArr = toArr.flat();
  }

  return toArr;
};

var toggle = function toggle(val) {
  var toggleFrom = function toggleFrom(arr) {
    var toggleArr = Array.from(arr);

    if (toggleArr.includes(val)) {
      var index = toggleArr.findIndex(function (el) {
        return el === val;
      });
      toggleArr.splice(index, 1);
    } else {
      toggleArr.push(val);
    }

    return toggleArr;
  };

  return toggleFrom;
};

var array = {
  insert: insert,
  insertArray: insertArray,
  //insertObject,
  toggle: toggle
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

export { array as $array, char as $char, $file };
