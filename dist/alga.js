var random = function random() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 255;
  var maxNum = Number(max) + 1;
  return Math.floor(Math.random() * maxNum);
};

var int = {
  random: random
};

var random$1 = function random() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var outputNum = '';
  var basicNum = '0123456789';

  for (var i = 0; i < size; i++) {
    outputNum += basicNum.charAt(Math.floor(Math.random() * basicNum.length));
  }

  return outputNum;
};

var number = {
  random: random$1
};

var random$2 = function random() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'basic';
  var outputChar = '';
  var basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

  if (type === 'hex') {
    basicChar = '0123456789abcdef';
  } else if (type === 'password') {
    basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?';
  }

  for (var i = 0; i < size; i++) {
    outputChar += basicChar.charAt(Math.floor(Math.random() * basicChar.length));
  }

  return outputChar;
};

var char = {
  random: random$2
};

var split = function split(str) {
  var splitString = function splitString(start) {
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var strArray = [];

    if (typeof str === 'string') {
      if (start >= 1) {
        strArray.push(str.slice(0, start));
      }

      if (end !== null) {
        strArray.push(str.slice(start, end));
        strArray.push(str.slice(end));
      } else {
        strArray.push(str.slice(start));
      }
    }

    return strArray;
  };

  return splitString;
};

var capitalize = function capitalize(str) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'single';
  if (typeof str !== 'string') return;
  var capStr = str;

  if (opt === 'multiple') {
    capStr = capStr.toLowerCase().replace(/\w\S*/g, function (w) {
      return w.replace(/^\w/, function (c) {
        return c.toUpperCase();
      });
    });
  } else {
    capStr = capStr.trimStart().replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
  }

  return capStr;
};

var string = {
  split: split,
  capitalize: capitalize
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var Insert = /*#__PURE__*/function () {
  function Insert(valArr, toArr) {
    _classCallCheck(this, Insert);

    this.valArr = valArr;
    this.toArr = toArr;
  }

  _createClass(Insert, [{
    key: "first",
    value: function first() {
      return [].concat(_toConsumableArray(this.valArr), _toConsumableArray(this.toArr)); // unshift(value)
    }
  }, {
    key: "last",
    value: function last() {
      return [].concat(_toConsumableArray(this.toArr), _toConsumableArray(this.valArr)); // push(value)
    }
  }, {
    key: "before",
    value: function before(index) {
      var indexBefore = isNaN(index) ? 1 : index;
      this.toArr.splice(Number(indexBefore) - 1, 0, this.valArr);
      return this.toArr.flat();
    }
  }, {
    key: "after",
    value: function after(index) {
      var indexAfter = isNaN(index) ? 0 : index;
      this.toArr.splice(Number(indexAfter) + 1, 0, this.valArr);
      return this.toArr.flat();
    }
  }]);

  return Insert;
}();

var insert = function insert() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  if (!value) return;

  var to = function to(toArr) {
    var toPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var atIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (_typeof(toArr) !== 'object') return;
    var arrVal = Array.from(toArr);
    var resArr = new Insert(value, arrVal);

    if (toPosition === 'first') {
      resArr = resArr.first();
    } else if (toPosition === 'last') {
      resArr = resArr.last();
    } else if (toPosition === 'before') {
      resArr = resArr.before(atIndex);
    } else if (toPosition === 'after') {
      resArr = resArr.after(atIndex);
    }

    return resArr;
  };

  return to;
};

var index = function index(indexArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    key: 'id',
    value: 0
  };
  var indexedArray = Array.from(indexArr);
  var resultNum = -1;

  if ('key' in options && 'value' in options) {
    resultNum = indexedArray.length >= 1 ? indexedArray.findIndex(function (obj) {
      return obj[options.key] === options.value;
    }) : -1;
  } else {
    if (indexedArray.length >= 1) {
      resultNum = indexedArray.findIndex(function (obj) {
        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (key in obj && obj[key] === val) {
            return true;
          }
        }
      });
    }
  }

  return resultNum;
};

var merge = function merge() {
  for (var _len = arguments.length, obj = new Array(_len), _key = 0; _key < _len; _key++) {
    obj[_key] = arguments[_key];
  }

  if (!obj) return;
  var newObj = {};
  var newMap = new Map();

  for (var _i = 0, _obj = obj; _i < _obj.length; _i++) {
    var prop = _obj[_i];

    for (var _i2 = 0, _Object$entries = Object.entries(prop); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          val = _Object$entries$_i[1];

      if (!newMap.has(key)) {
        newMap.set(key, val);
        newObj[key] = val;
      }
    }
  }

  return newObj;
};

var replace = function replace() {
  for (var _len2 = arguments.length, obj = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    obj[_key2] = arguments[_key2];
  }

  if (!obj) return;
  var newObj = {};

  for (var _i3 = 0, _obj2 = obj; _i3 < _obj2.length; _i3++) {
    var prop = _obj2[_i3];

    for (var _i4 = 0, _Object$entries2 = Object.entries(prop); _i4 < _Object$entries2.length; _i4++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i4], 2),
          key = _Object$entries2$_i[0],
          val = _Object$entries2$_i[1];

      newObj[key] = val;
    }
  }

  return newObj;
};

var update = function update(setObj) {
  if (_typeof(setObj) !== 'object' && setObj !== null) return;
  return function (oriArr, whereObj) {
    if (_typeof(oriArr) !== 'object' && _typeof(whereObj) !== 'object') return;
    var oriArray = Array.from(oriArr);
    var newArray = [];
    var indexNum = index(oriArray, whereObj);
    newArray = oriArray.map(function (obj, ind) {
      var resMap = obj;

      if (ind === indexNum) {
        resMap = replace(obj, setObj);
      }

      return resMap;
    });
    return newArray;
  };
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

var flatten = function flatten(nestArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var flattenArray = [];
  var flattenOptions = {};
  flattenOptions.id = options.id || 'id';
  flattenOptions.parent = options.parent || 'parent';
  flattenOptions.children = options.children || 'children';

  var parentArray = function parentArray() {
    var nestedArray = Array.from(nestArr);
    nestedArray.forEach(function (item) {
      if (_typeof(item) === 'object' && item !== null) {
        var newObject = item;
        newObject[flattenOptions.parent] = '0';

        if (_typeof(newObject[flattenOptions.children]) === 'object' && Array.isArray(newObject[flattenOptions.children])) {
          childrenArray(newObject[flattenOptions.children], item);
          delete newObject[flattenOptions.children];
        }

        flattenArray.push(newObject);
      }
    });
  };

  var childrenArray = function childrenArray(childArr, parentObj) {
    if (childArr.length >= 1) {
      var nestedArray = Array.from(childArr);
      nestedArray.forEach(function (item) {
        if (_typeof(item) === 'object' && item !== null) {
          var newObject = item;
          newObject[flattenOptions.parent] = parentObj[flattenOptions.id];

          if (_typeof(newObject[flattenOptions.children]) === 'object' && Array.isArray(newObject[flattenOptions.children])) {
            childrenArray(newObject[flattenOptions.children], item);
            delete newObject[flattenOptions.children];
          }

          flattenArray.push(newObject);
        }
      });
    }
  };

  parentArray();
  return flattenArray;
};

var nested = function nested(flatArr) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var nestedArray = [];
  var flattenArray = Array.from(flatArr);
  var nestedOptions = {};
  nestedOptions.id = options.id || 'id';
  nestedOptions.parent = options.parent || 'parent';
  nestedOptions.children = options.children || 'children';

  var parentArray = function parentArray(flattenArr) {
    flattenArr.forEach(function (item) {
      if (_typeof(item) === 'object' && item !== null) {
        var newObject = null;

        if (typeof item[nestedOptions.parent] === 'string' && item[nestedOptions.parent] === '0') {
          newObject = createNewObject(item);
        } else if (typeof item[nestedOptions.parent] === 'number' && item[nestedOptions.parent] === 0) {
          newObject = createNewObject(item);
        }

        if (newObject !== null) {
          nestedArray.push(newObject);
        }
      }
    });
  };

  var createNewObject = function createNewObject(itemObj) {
    var newObject = itemObj;

    if (itemObj[nestedOptions.children] === undefined || itemObj[nestedOptions.children] === null) {
      newObject[nestedOptions.children] = childrenArray(itemObj[nestedOptions.id]);

      if (newObject[nestedOptions.children].length <= 0) {
        delete newObject[nestedOptions.children];
      }
    }

    delete newObject[nestedOptions.parent];
    return newObject;
  };

  var childrenArray = function childrenArray(parent) {
    var childArray = [];

    if (filteredArray(parent).length >= 1) {
      filteredArray(parent).forEach(function (item) {
        childArray.push(createNewObject(item));
      });
    }

    return childArray;
  };

  var filteredArray = function filteredArray(parent) {
    return flattenArray.filter(function (item) {
      return item.parent === parent;
    });
  };

  parentArray(flattenArray);
  return nestedArray;
};

var unique = function unique(oriArr) {
  var byProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (_typeof(oriArr) !== 'object') return;
  var oriArray = Array.from(oriArr);
  var newArray = [];

  if (typeof byProp === 'string') {
    var newSet = new Set();

    var _iterator = _createForOfIteratorHelper(oriArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var oriItem = _step.value;

        if (!newSet.has(oriItem[byProp])) {
          newSet.add(oriItem[byProp]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    newArray = _toConsumableArray(newSet);
  } else {
    var _newSet = new Set();

    var _iterator2 = _createForOfIteratorHelper(oriArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _oriItem = _step2.value;

        if (!_newSet.has(_oriItem)) {
          _newSet.add(_oriItem);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    newArray = _toConsumableArray(_newSet);
  }

  return newArray;
};

var search = function search() {
  for (var _len = arguments.length, searchStr = new Array(_len), _key = 0; _key < _len; _key++) {
    searchStr[_key] = arguments[_key];
  }

  if (!searchStr) return;
  return function (fromArr) {
    if (_typeof(fromArr) !== 'object') return;
    var filteredArray = [];
    searchStr.forEach(function (searchString) {
      var filterFromArr = Array.from(fromArr).filter(function (obj) {
        for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          if (Number(obj[key]) !== 'NaN' && Number(val) === Number(searchString)) {
            return true;
          } else if (typeof obj[key] === 'string' && val.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
            return true;
          }
        }

        return false;
      });
      filteredArray = unique(filteredArray.concat(filterFromArr));
    });
    return filteredArray;
  };
};

var searchBy = function searchBy() {
  for (var _len2 = arguments.length, filterStr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    filterStr[_key2] = arguments[_key2];
  }

  if (!filterStr) return;
  return function (fromArr, whereArr) {
    if (_typeof(fromArr) !== 'object') return;
    var filteredArray = [];
    filterStr.forEach(function (filterString) {
      var filterFromArr = Array.from(fromArr).filter(function (obj) {
        for (var _i2 = 0, _Array$from = Array.from(whereArr); _i2 < _Array$from.length; _i2++) {
          var val = _Array$from[_i2];

          if (val in obj) {
            if (Number(obj[val]) !== 'NaN' && Number(obj[val]) === Number(filterString)) {
              return true;
            } else if (typeof obj[val] === 'string' && obj[val].toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
              return true;
            }
          }
        }

        return false;
      });
      filteredArray = unique(filteredArray.concat(filterFromArr));
    });
    return filteredArray;
  };
};

var filtered = function filtered() {
  for (var _len = arguments.length, filterStr = new Array(_len), _key = 0; _key < _len; _key++) {
    filterStr[_key] = arguments[_key];
  }

  if (!filterStr) return;
  return function (fromArr, whereArr) {
    if (_typeof(fromArr) !== 'object') return;
    var filteredArray = Array.from(fromArr);
    filterStr.forEach(function (filterString, index) {
      var filterFromArr = filteredArray.filter(function (obj) {
        if (whereArr[index] !== undefined || whereArr[index] !== null) {
          var val = whereArr[index];

          if (val in obj) {
            if (Number(obj[val]) !== 'NaN' && Number(obj[val]) === Number(filterString)) {
              return true;
            } else if (typeof obj[val] === 'string' && obj[val].toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
              return true;
            }
          }
        }

        return false;
      });
      filteredArray = filterFromArr;
    });
    return filteredArray;
  };
};

var sort = function sort(oriArr) {
  var sortStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  if (_typeof(oriArr) !== 'object') return;
  if (typeof sortStr !== 'string') return;
  var newArray = Array.from(oriArr);

  if (sortStr === 'desc') {
    newArray.sort(function (a, b) {
      if (typeof a === 'number' && typeof b === 'number') {
        return b - a;
      } else if (typeof a === 'string' && typeof b === 'string') {
        var propA = a.toLowerCase();
        var propB = b.toLowerCase();
        var propRes = 0;

        if (propB < propA) {
          propRes = -1;
        } else if (propB > propA) {
          propRes = 1;
        }

        return propRes;
      }
    });
  } else {
    newArray.sort(function (a, b) {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      } else if (typeof a === 'string' && typeof b === 'string') {
        var propA = a.toLowerCase();
        var propB = b.toLowerCase();
        var propRes = 0;

        if (propA < propB) {
          propRes = -1;
        } else if (propA > propB) {
          propRes = 1;
        }

        return propRes;
      }
    });
  }

  return newArray;
};

var sorted = function sorted(oriArr) {
  if (_typeof(oriArr) !== 'object') return;
  return function (propStr) {
    var sortStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
    if (typeof propStr !== 'string') return;
    if (typeof sortStr !== 'string') return;
    var newArray = Array.from(oriArr);

    if (sortStr === 'desc') {
      newArray.sort(function (a, b) {
        if (propStr in a && propStr in b && typeof a[propStr] === 'number' && typeof b[propStr] === 'number') {
          return b[propStr] - a[propStr];
        } else if (propStr in a && propStr in b && typeof a[propStr] === 'string' && typeof b[propStr] === 'string') {
          var propA = a[propStr].toLowerCase();
          var propB = b[propStr].toLowerCase();
          var propRes = 0;

          if (propB < propA) {
            propRes = -1;
          } else if (propB > propA) {
            propRes = 1;
          }

          return propRes;
        }
      });
    } else {
      newArray.sort(function (a, b) {
        if (propStr in a && propStr in b && typeof a[propStr] === 'number' && typeof b[propStr] === 'number') {
          return a[propStr] - b[propStr];
        } else if (propStr in a && propStr in b && typeof a[propStr] === 'string' && typeof b[propStr] === 'string') {
          var propA = a[propStr].toLowerCase();
          var propB = b[propStr].toLowerCase();
          var propRes = 0;

          if (propA < propB) {
            propRes = -1;
          } else if (propA > propB) {
            propRes = 1;
          }

          return propRes;
        }
      });
    }

    return newArray;
  };
};

var paginate = function paginate(oriArr) {
  if (_typeof(oriArr) !== 'object') return;
  return function (pageNum, showNum) {
    if (typeof pageNum !== 'number') return;
    if (typeof showNum !== 'number') return;
    var oriArray = Array.from(oriArr);
    var startPaginate = Number(showNum) * Number(pageNum) - (Number(showNum) - 1);
    var endPaginate = Number(showNum) * Number(pageNum);
    return oriArray.slice(startPaginate - 1, endPaginate <= oriArray.length ? endPaginate : oriArray.length);
  };
};

var pages = function pages(oriArr, showNum) {
  if (_typeof(oriArr) !== 'object') return;
  if (typeof showNum !== 'number') return;
  var oriArray = Array.from(oriArr);
  var divideLength = oriArray.length / Number(showNum);
  var splitFloatNum = divideLength.toString().split('.');
  var checkFloatNum = Number(splitFloatNum[1]) >= 5 ? 0 : 1;
  var pageNumber = 0;

  if (Number.isInteger(divideLength)) {
    pageNumber = divideLength;
  } else {
    pageNumber = Number(Number.parseFloat(divideLength).toFixed(0)) + checkFloatNum;
  }

  pageNumber = pageNumber === Number(showNum) ? 1 : pageNumber;
  return pageNumber;
};

var show = function show(oriArr) {
  if (_typeof(oriArr) !== 'object') return;
  return function (pageNum, showNum) {
    if (typeof pageNum !== 'number') return;
    if (typeof showNum !== 'number') return;
    var oriArray = Array.from(oriArr);
    var startPaginate = Number(showNum) * Number(pageNum) - (Number(showNum) - 1);
    var endPaginate = Number(showNum) * Number(pageNum);
    return {
      from: startPaginate,
      to: endPaginate <= oriArray.length ? endPaginate : oriArray.length,
      of: oriArray.length
    };
  };
};

var pagination = function pagination(allPages) {
  var pageActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var pageLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (typeof allPages !== 'number') return;
  var newArray = [];
  var maxPages = Number(allPages) < Number(pageActive) ? Number(allPages) : Number(pageActive);
  var minPages = Number(pageActive) < 1 ? 1 : Number(pageActive);
  var pageAddition = maxPages + Number(pageLimit);
  var pageSubtraction = minPages - Number(pageLimit);

  if (Number(pageLimit) === 0) {
    for (var i = 1; i <= Number(allPages); i++) {
      newArray.push(i);
    }
  } else {
    if (minPages > 1) {
      for (var _i = pageSubtraction; _i < minPages; _i++) {
        newArray.push(_i);
      }
    }

    for (var _i2 = maxPages; _i2 <= pageAddition; _i2++) {
      newArray.push(_i2);
    }
  }

  var filterNegative = newArray.filter(function (num) {
    return num > 0;
  });
  var filterMax = filterNegative.filter(function (num) {
    return num <= Number(allPages);
  });

  if (pageAddition < Number(allPages) && Number(pageLimit) !== 0) {
    filterMax.push('...');
  }

  if (pageSubtraction > 1 && Number(pageLimit) !== 0) {
    filterMax.unshift('...');
  }

  return filterMax;
};

var sum = function sum(oriArr) {
  var byObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (_typeof(oriArr) !== 'object') return;
  var originalArray = Array.from(oriArr);
  var sumNum = 0;

  if (typeof byObj === 'string') {
    var objArray = [];

    var _iterator = _createForOfIteratorHelper(originalArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var oa = _step.value;

        if (byObj in oa) {
          objArray.push(oa[byObj]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    for (var _i = 0, _objArray = objArray; _i < _objArray.length; _i++) {
      var ba = _objArray[_i];
      sumNum += Number(ba);
    }
  } else {
    var _iterator2 = _createForOfIteratorHelper(originalArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var oa2 = _step2.value;
        sumNum += Number(oa2);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return sumNum;
};

var array = {
  insert: insert,
  update: update,
  toggle: toggle,
  flatten: flatten,
  nested: nested,
  index: index,
  search: search,
  searchBy: searchBy,
  filtered: filtered,
  sort: sort,
  sorted: sorted,
  paginate: paginate,
  pages: pages,
  show: show,
  pagination: pagination,
  sum: sum,
  unique: unique
};

var remove = function remove() {
  for (var _len = arguments.length, propKey = new Array(_len), _key = 0; _key < _len; _key++) {
    propKey[_key] = arguments[_key];
  }

  if (!propKey) return;
  return function (fromObj) {
    if (_typeof(fromObj) !== 'object' || fromObj === null) return;
    var newObj = {};

    for (var _i = 0, _Object$entries = Object.entries(fromObj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1),
          name = _Object$entries$_i[0];

      newObj[name] = fromObj[name];
    }

    var _iterator = _createForOfIteratorHelper(propKey),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;

        if (key in newObj) {
          delete newObj[key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return newObj;
  };
};

var removeBy = function removeBy() {
  for (var _len2 = arguments.length, propVal = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    propVal[_key2] = arguments[_key2];
  }

  if (!propVal) return;
  return function (fromObj) {
    if (_typeof(fromObj) !== 'object' || fromObj === null) return;
    var newObj = {};
    var newSet = new Set(propVal);

    for (var _i2 = 0, _Object$entries2 = Object.entries(fromObj); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 1),
          key = _Object$entries2$_i[0];

      if (!newSet.has(fromObj[key])) {
        newObj[key] = fromObj[key];
      }
    }

    return newObj;
  };
};

var object = {
  remove: remove,
  removeBy: removeBy,
  merge: merge,
  replace: replace
};

var size = function size(bytes, decimalPoint) {
  if (bytes === 0) return '0 Bytes';
  var k = 1000;
  var dm = decimalPoint || 1;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

var name = function name(val) {
  if (typeof val === 'string') {
    if (val.indexOf('', 41) > 40) {
      return val.slice(0, 41) + "...";
    } else {
      return val;
    }
  }
};

var type = function type(val) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'type';
  var arrFile = val.split('/');

  if (type == 'format') {
    arrFile.shift();
  } else {
    arrFile.pop();
  }

  return arrFile.join("");
};

var date = function date(val) {
  return new Date(val).toDateString();
};

var image = function image(_image) {
  if ('name' in _image && typeof _image.name === 'string') {
    return URL.createObjectURL(_image);
  }
};

var loadImage = function loadImage(image) {
  if ('name' in image && typeof image.name === 'string') {
    URL.revokeObjectURL(image);
  }
};
/* Alternative */


var formatSize = function formatSize(file) {
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

var humanSize = function humanSize(bytes) {
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

var exported = function exported(oriArr, toFile) {
  if (_typeof(oriArr) !== 'object') return;
  if (typeof toFile !== 'string') return;
  var oriArray = Array.from(oriArr);
  var toStringFile = '';

  if (toFile.toLowerCase() === 'json') {
    toStringFile = 'data:application/json;charset=utf-8,' + JSON.stringify(oriArray, null, 2);
  } else if (toFile.toLowerCase() === 'csv') {
    var csvStr = '';

    var _iterator = _createForOfIteratorHelper(oriArray),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var csvObj = _step.value;

        for (var csvKey in csvObj) {
          csvStr += csvObj[csvKey] + ',';
        }

        csvStr = csvStr.trim().substring(0, csvStr.length - 1);
        csvStr += '\n';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    csvStr = csvStr.trim().substring(0, csvStr.length - 1);
    toStringFile = 'data:text/csv;charset=utf-8,' + csvStr;
  } else if (toFile.toLowerCase() === 'sql') {
    var sqlStr = 'INSERT INTO `export_table` (';

    for (var sqlKey in oriArray[0]) {
      sqlStr += '`' + sqlKey + '`,';
    }

    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
    sqlStr += ') VALUES ';

    var _iterator2 = _createForOfIteratorHelper(oriArray),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var sqlObj = _step2.value;
        sqlStr += '(';

        for (var _sqlKey in sqlObj) {
          sqlStr += '`' + sqlObj[_sqlKey] + '`,';
        }

        sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
        sqlStr += '),';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1);
    sqlStr += ';';
    toStringFile = 'data:application/sql;charset=utf-8,' + sqlStr;
  } else if (toFile.toLowerCase() === 'xml') {
    var xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n<data>';

    for (var xmlObj in oriArray) {
      xmlStr += '\n  <entry>';

      for (var xmlKey in xmlObj) {
        xmlStr += '\n    <' + xmlKey + '`>' + xmlObj[xmlKey] + '</' + xmlKey + '`>';
      }

      xmlStr += '\n  </entry>';
    }

    xmlStr += '\n</data>';
    toStringFile = 'data:application/xml;charset=utf-8,' + xmlStr;
  } else if (toFile.toLowerCase() === 'ths') {
    var thsStr = '//visit official site: http://ths.glitch.me \n("data", [';

    var _iterator3 = _createForOfIteratorHelper(oriArray),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var thsObj = _step3.value;
        thsStr += '\n  ("entry", [';

        for (var thsKey in thsObj) {
          thsStr += '\n    ("' + thsKey + '", ';
          thsStr += thsObj[thsKey] + '),';
        }

        thsStr = thsStr.trim().substring(0, thsStr.length - 1);
        thsStr += ']),';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    thsStr = thsStr.trim().substring(0, thsStr.length - 1);
    thsStr = '])';
    toStringFile = 'data:application/ths;charset=utf-8,' + thsStr;
  }

  return toStringFile;
};

var download = function download(strFile) {
  var asFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'txt';
  var nameFile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'export-to';
  if (typeof strFile !== 'string') return;
  var fileName = nameFile + '.' + asFile.toLowerCase();
  var fileStr = encodeURI(strFile);
  var fileLink = document.createElement("a");
  fileLink.href = fileStr;
  fileLink.download = fileName;
  document.body.appendChild(fileLink);
  fileLink.click();
  document.body.removeChild(fileLink);
};

var printed = function printed(oriArr) {
  if (_typeof(oriArr) !== 'object') return;
  var oriArray = Array.from(oriArr);
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  table.appendChild(thead);
  table.appendChild(tbody);
  var trow = document.createElement("tr");

  for (var tableKey in oriArray[0]) {
    var tcol = document.createElement("th");
    tcol.textContent = tableKey.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
    trow.appendChild(tcol);
  }

  thead.appendChild(trow);

  for (var _i = 0, _oriArray = oriArray; _i < _oriArray.length; _i++) {
    var tableObj = _oriArray[_i];
    var tr = document.createElement("tr");

    for (var _tableKey in tableObj) {
      var td = document.createElement("td");
      td.textContent = tableObj[_tableKey];
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  var w = window.open();
  w.document.body.appendChild(table);
  w.focus();
  w.print();
};

var file = {
  size: size,
  name: name,
  type: type,
  image: image,
  date: date,
  loadImage: loadImage,
  formatSize: formatSize,
  humanSize: humanSize,
  exported: exported,
  download: download,
  printed: printed
};

export { array as $array, char as $char, file as $file, int as $int, number as $number, object as $object, string as $string };
