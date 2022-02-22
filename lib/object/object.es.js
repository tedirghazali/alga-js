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
    var newSet = new Set(propVal);
    for (var _a = 0, _b = Object.keys(fromObject); _a < _b.length; _a++) {
        var key = _b[_a];
        if (!newSet.has(fromObject[key])) {
            newObject[key] = fromObject[key];
        }
    }
    return newObject;
};

export { remove, removeBy };
