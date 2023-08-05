'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var remove = function (fromObject) {
    var propKey = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        propKey[_i - 1] = arguments[_i];
    }
    var newObject = Object.assign({}, fromObject);
    for (var _a = 0, propKey_1 = propKey; _a < propKey_1.length; _a++) {
        var key = propKey_1[_a];
        if (key in newObject) {
            delete newObject[key];
        }
    }
    return newObject;
};
var removeBy = function (fromObject) {
    var propVal = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        propVal[_i - 1] = arguments[_i];
    }
    var newObject = {};
    var newSet = new Set(propVal.map(function (i) { return String(i); }));
    for (var _a = 0, _b = Object.keys(fromObject); _a < _b.length; _a++) {
        var key = _b[_a];
        if (!newSet.has(String(fromObject[key]))) {
            newObject[key] = fromObject[key];
        }
    }
    return newObject;
};
var removeByKey = remove;
var removeByVal = removeBy;

var filter = function (fromObject, propKey, valArray) {
    if (valArray === void 0) { valArray = false; }
    var newObject = {};
    var filterObject = Object.entries(fromObject).filter(function (item) {
        return item[0].includes(propKey);
    });
    newObject = Object.fromEntries(new Map(filterObject));
    if (valArray === true) {
        newObject = filterObject.map(function (item) {
            return item[1];
        });
    }
    return newObject;
};
var filterBy = function (fromObject, propVal, valArray) {
    if (valArray === void 0) { valArray = false; }
    var newObject = {};
    var filterObject = Object.entries(fromObject).filter(function (item) {
        return item[1].includes(propVal);
    });
    newObject = Object.fromEntries(new Map(filterObject));
    if (valArray === true) {
        newObject = filterObject.map(function (item) {
            return item[1];
        });
    }
    return newObject;
};
var filterByKey = filter;
var filterByVal = filterBy;

var count = function (fromObject) {
    return Number(Object.entries(fromObject).length);
};

exports.count = count;
exports.filter = filter;
exports.filterBy = filterBy;
exports.filterByKey = filterByKey;
exports.filterByVal = filterByVal;
exports.remove = remove;
exports.removeBy = removeBy;
exports.removeByKey = removeByKey;
exports.removeByVal = removeByVal;
