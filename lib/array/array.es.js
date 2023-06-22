var uniq = function (fromArray, byProp) {
    if (byProp === void 0) { byProp = ''; }
    var newArray = [];
    var byNumber = Number(byProp);
    var newSet = new Set();
    for (var _i = 0, fromArray_1 = fromArray; _i < fromArray_1.length; _i++) {
        var fromItem = fromArray_1[_i];
        if (typeof fromItem === 'object' && fromItem !== null && typeof byProp === 'string' && byProp !== '' && Array.isArray(fromItem) === false) {
            if (!newSet.has(fromItem[byProp])) {
                newArray.push(fromItem);
                newSet.add(fromItem[byProp]);
            }
        }
        else if (Array.isArray(fromItem) && isNaN(byNumber) === false && Number(fromItem.length) > Number(byProp)) {
            var newIndex = Number(byProp);
            if (!newSet.has(fromItem[newIndex])) {
                newArray.push(fromItem);
                newSet.add(fromItem[newIndex]);
            }
        }
        else {
            if (!newSet.has(JSON.stringify(fromItem))) {
                newArray.push(fromItem);
                newSet.add(JSON.stringify(fromItem));
            }
        }
    }
    return newArray;
};

var take = function (fromArray, byProp, cbProp) {
    if (cbProp === void 0) { cbProp = ''; }
    var newArray = [];
    var byNumber = Number(byProp);
    if (Array.isArray(fromArray) && fromArray.length >= 1) {
        if (typeof fromArray[0] === 'object' && fromArray[0] !== null && typeof byProp === 'string' && Object.keys(fromArray[0]).includes(byProp)) {
            newArray = fromArray.map(function (item) {
                return item[byProp];
            });
            if (cbProp === 'uniq') {
                newArray = Array.from(new Set(newArray));
            }
        }
        else if (Array.isArray(fromArray[0]) && isNaN(byNumber) === false) {
            newArray = fromArray.map(function (item) {
                return item[byNumber];
            });
            if (cbProp === 'uniq') {
                newArray = Array.from(new Set(newArray));
            }
        }
        else if (typeof byProp === 'function') {
            newArray = fromArray.filter(function (item) {
                return byProp(item);
            });
            if (cbProp !== '') {
                newArray = newArray.map(function (item) { return item[cbProp]; });
            }
        }
    }
    return newArray;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var nested = function (flatArray, options) {
    if (options === void 0) { options = { prop: 'id', parent: 'parent', children: 'children' }; }
    var nestedArray = [];
    var flattenArray = Array.from(flatArray);
    var nestedOptions = options;
    var parentArray = function (flattenArr) {
        nestedArray = flattenArr.filter(function (item) {
            return typeof item === 'object' && item !== null && !flattenArr.map(function (i) { return String(i[nestedOptions.prop]).trim(); }).includes(String(item[nestedOptions.parent]).trim());
        }).map(function (item) { return createNewObject(item); });
    };
    var createNewObject = function (itemObj) {
        var newObject = itemObj;
        if (itemObj[nestedOptions.children] === undefined || itemObj[nestedOptions.children] === null) {
            newObject[nestedOptions.children] = childrenArray(itemObj[nestedOptions.prop]);
            if (newObject[nestedOptions.children].length <= 0) {
                delete newObject[nestedOptions.children];
            }
        }
        delete newObject[nestedOptions.parent];
        return newObject;
    };
    var childrenArray = function (parent) {
        var childArray = [];
        if (filteredArray(parent).length >= 1) {
            filteredArray(parent).forEach(function (item) {
                childArray.push(createNewObject(item));
            });
        }
        return childArray;
    };
    var filteredArray = function (parent) {
        return flattenArray.filter(function (item) { return item[nestedOptions.parent] === parent; });
    };
    parentArray(flattenArray);
    return nestedArray;
};
var nestedAsync = function (flatPromise, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var flatArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(flatPromise)];
                case 1:
                    flatArray = _a.sent();
                    return [2 /*return*/, Promise.resolve(nested(flatArray, options))];
            }
        });
    });
};

var flatten = function (nestArray, options) {
    if (options === void 0) { options = { prop: 'id', parent: 'parent', children: 'children' }; }
    var flattenArray = [];
    var flattenOptions = options;
    var parentArray = function () {
        var nestedArray = Array.from(nestArray);
        nestedArray.forEach(function (item) {
            if (typeof item === 'object' && item !== null) {
                var newObject = item;
                newObject[flattenOptions.parent] = '0';
                if (typeof newObject[flattenOptions.children] === 'object' && Array.isArray(newObject[flattenOptions.children])) {
                    childrenArray(newObject[flattenOptions.children], item);
                    delete newObject[flattenOptions.children];
                }
                flattenArray.push(newObject);
            }
        });
    };
    var childrenArray = function (childArr, parentObj) {
        if (childArr.length >= 1) {
            var nestedArray = Array.from(childArr);
            nestedArray.forEach(function (item) {
                if (typeof item === 'object' && item !== null) {
                    var newObject = item;
                    newObject[flattenOptions.parent] = parentObj[flattenOptions.prop];
                    if (typeof newObject[flattenOptions.children] === 'object' && Array.isArray(newObject[flattenOptions.children])) {
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
var flattenAsync = function (nestPromise, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var nestArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(nestPromise)];
                case 1:
                    nestArray = _a.sent();
                    return [2 /*return*/, Promise.resolve(flatten(nestArray, options))];
            }
        });
    });
};

var search = function (fromArrayay) {
    var searchString = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        searchString[_i - 1] = arguments[_i];
    }
    var newArray = [];
    var _loop_1 = function (searchItem) {
        var filterArray = Array.from(fromArrayay).filter(function (item) {
            if (isNaN(item) === false && Number(item) === Number(searchItem)) {
                return true;
            }
            else if (typeof item === 'string' && String(item).toLowerCase().includes(String(searchItem).toLowerCase())) {
                return true;
            }
            else if (typeof item === 'object' && item !== null) {
                for (var _i = 0, _a = Object.keys(item); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (isNaN(item[key]) === false && Number(item[key]) === Number(searchItem)) {
                        return true;
                    }
                    else if (typeof item[key] === 'string' && String(item[key]).toLowerCase().includes(String(searchItem).toLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        });
        newArray = uniq(__spreadArray(__spreadArray([], newArray, true), filterArray, true));
    };
    for (var _a = 0, _b = searchString.flat(); _a < _b.length; _a++) {
        var searchItem = _b[_a];
        _loop_1(searchItem);
    }
    return newArray;
};
var searchBy = function (fromArray, queryArray, propArray) {
    var newArray = [];
    var _loop_2 = function (query) {
        var filterArray = Array.from(fromArray).filter(function (item) {
            for (var _i = 0, _a = Array.from(propArray); _i < _a.length; _i++) {
                var val = _a[_i];
                if (val in item) {
                    if (isNaN(item[val]) === false && Number(item[val]) === Number(query)) {
                        return true;
                    }
                    else if (typeof item[val] === 'string' && String(item[val]).toLowerCase().indexOf(String(query).toLowerCase()) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        });
        newArray = uniq(__spreadArray(__spreadArray([], newArray, true), filterArray, true));
    };
    for (var _i = 0, queryArray_1 = queryArray; _i < queryArray_1.length; _i++) {
        var query = queryArray_1[_i];
        _loop_2(query);
    }
    return newArray;
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

var filter = function (fromArray, filterObject) {
    var newArray = Array.from(fromArray);
    var clearObject = removeBy(filterObject, '', 0);
    var _loop_1 = function (ftrKey) {
        var filterArray = newArray.filter(function (object) {
            if (ftrKey in object) {
                if (isNaN(object[ftrKey]) === false && Number(object[ftrKey]) === Number(clearObject[ftrKey])) {
                    return true;
                }
                else if (typeof object[ftrKey] === 'string' && String(object[ftrKey]).toLowerCase().includes(String(clearObject[ftrKey]).toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
        newArray = filterArray;
    };
    for (var _i = 0, _a = Object.keys(clearObject); _i < _a.length; _i++) {
        var ftrKey = _a[_i];
        _loop_1(ftrKey);
    }
    return newArray;
};

/*interface CallBack<Type> {
  (a: Type, b: Type): number;
} compareFunc: CallBack<any>*/
var sortBy = function (fromArray, propString, sortString) {
    if (sortString === void 0) { sortString = 'asc'; }
    var newArray = Array.from(fromArray);
    if (sortString === 'asc') {
        newArray.sort(function (a, b) {
            if (propString in a && propString in b) {
                if (isNaN(a[propString]) === false && isNaN(b[propString]) === false) {
                    return Number(a[propString]) - Number(b[propString]);
                }
                else if (typeof a[propString] === 'string' && typeof b[propString] === 'string') {
                    var propA = a[propString].toLowerCase();
                    var propB = b[propString].toLowerCase();
                    var propRes = 0;
                    if (propA < propB) {
                        propRes = -1;
                    }
                    else if (propA > propB) {
                        propRes = 1;
                    }
                    return propRes;
                }
            }
        });
    }
    else if (sortString === 'desc') {
        newArray.sort(function (a, b) {
            if (propString in a && propString in b) {
                if (isNaN(a[propString]) === false && isNaN(b[propString]) === false) {
                    return Number(b[propString]) - Number(a[propString]);
                }
                else if (typeof a[propString] === 'string' && typeof b[propString] === 'string') {
                    var propA = a[propString].toLowerCase();
                    var propB = b[propString].toLowerCase();
                    var propRes = 0;
                    if (propB < propA) {
                        propRes = -1;
                    }
                    else if (propB > propA) {
                        propRes = 1;
                    }
                    return propRes;
                }
            }
        });
    }
    return newArray;
};
var sort = sortBy;
var order = function (fromArray, newProp) {
    if (newProp === void 0) { newProp = 'order'; }
    var newArray = Array.from(fromArray);
    return newArray.map(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            item[newProp] = Number(index) + 1;
        }
        return item;
    });
};

var paginate = function (fromArray, pageActive, limitPerPage) {
    if (pageActive === void 0) { pageActive = 1; }
    if (limitPerPage === void 0) { limitPerPage = 10; }
    var newArray = Array.from(fromArray);
    var startPaginate = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1);
    var endPaginate = Number(limitPerPage) * Number(pageActive);
    return newArray.slice(startPaginate - 1, (endPaginate <= newArray.length) ? endPaginate : newArray.length);
};
var pages = function (lengthOfArray, limitPerPage) {
    if (limitPerPage === void 0) { limitPerPage = 10; }
    var arrayLength = Array.isArray(lengthOfArray) ? lengthOfArray.length : lengthOfArray;
    var divideLength = Number(arrayLength) / Number(limitPerPage);
    var pageNumber = Math.ceil(divideLength);
    return pageNumber;
};
var pageInfo = function (fromArray, pageActive, limitPerPage) {
    if (pageActive === void 0) { pageActive = 1; }
    if (limitPerPage === void 0) { limitPerPage = 10; }
    var newArray = Array.from(fromArray);
    var startPaginate = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1);
    var endPaginate = Number(limitPerPage) * Number(pageActive);
    return {
        from: (newArray.length >= 1) ? startPaginate : 0,
        start: (newArray.length >= 1) ? startPaginate : 0,
        to: (endPaginate <= newArray.length) ? endPaginate : newArray.length,
        end: (endPaginate <= newArray.length) ? endPaginate : newArray.length,
        of: newArray.length,
        length: newArray.length
    };
};
var pagination = function (totalPages, pageActive, positionOfEllipsis) {
    if (pageActive === void 0) { pageActive = 1; }
    if (positionOfEllipsis === void 0) { positionOfEllipsis = 0; }
    var newArray = [];
    var maxPages = (Number(totalPages) < Number(pageActive)) ? Number(totalPages) : Number(pageActive);
    var minPages = (Number(pageActive) < 1) ? 1 : Number(pageActive);
    var pageAddition = maxPages + Number(positionOfEllipsis);
    var pageSubtraction = minPages - Number(positionOfEllipsis);
    if (Number(positionOfEllipsis) === 0) {
        for (var i = 1; i <= Number(totalPages); i++) {
            newArray.push(String(i));
        }
    }
    else {
        if (minPages > 1) {
            for (var i = pageSubtraction; i < minPages; i++) {
                newArray.push(String(i));
            }
        }
        for (var i = maxPages; i <= pageAddition; i++) {
            newArray.push(String(i));
        }
    }
    var filterNegative = newArray.filter(function (num) { return Number(num) > 0; });
    var filterMax = filterNegative.filter(function (num) { return Number(num) <= Number(totalPages); });
    if (pageAddition < Number(totalPages) && Number(positionOfEllipsis) !== 0) {
        filterMax.push('...');
    }
    if (pageSubtraction > 1 && Number(positionOfEllipsis) !== 0) {
        filterMax.unshift('...');
    }
    return filterMax;
};

var duplication = function (fromArray, prop) {
    if (prop === void 0) { prop = ''; }
    var newArray = [];
    var newArrSet = Array.from(new Set(fromArray));
    if (prop !== '') {
        newArrSet = Array.from(new Set(fromArray.map(function (i) { return i[prop]; })));
    }
    var _loop_1 = function (setItem) {
        var tempArr = Array.from(fromArray).filter(function (filterItem) {
            if (prop !== '') {
                return filterItem[prop] === setItem;
            }
            else {
                return filterItem === setItem;
            }
        });
        if (Number(tempArr.length) >= 2) {
            tempArr.forEach(function (arrItem) {
                newArray.push(arrItem);
            });
        }
    };
    for (var _i = 0, newArrSet_1 = newArrSet; _i < newArrSet_1.length; _i++) {
        var setItem = newArrSet_1[_i];
        _loop_1(setItem);
    }
    return newArray;
};
var duplicationGroup = function (fromArray, prop) {
    if (prop === void 0) { prop = ''; }
    var newObj = {};
    var newSet = new Set();
    var newArrSet = Array.from(new Set(fromArray));
    if (prop !== '') {
        newArrSet = Array.from(new Set(fromArray.map(function (i) { return i[prop]; })));
    }
    var _loop_2 = function (setItem) {
        var tempArr = Array.from(fromArray).filter(function (filterItem) {
            if (prop !== '') {
                return filterItem[prop] === setItem;
            }
            else {
                return filterItem === setItem;
            }
        });
        if (!newSet.has(tempArr.length)) {
            newSet.add(tempArr.length);
            newObj[tempArr.length] = [];
        }
        tempArr.forEach(function (arrItem) {
            newObj[tempArr.length].push(arrItem);
        });
    };
    for (var _i = 0, newArrSet_2 = newArrSet; _i < newArrSet_2.length; _i++) {
        var setItem = newArrSet_2[_i];
        _loop_2(setItem);
    }
    return newObj;
};

// Fisher-Yates or Durstenfeld shuffle
var shuffle = function (arr) {
    var _a;
    // Define all the variables that we need
    var newArr = arr;
    var len = arr.length;
    var ind = 0;
    // Loop it using while for getting the randomize index (for loop is not good for this)
    while (len >= 1) {
        //@ts-ignore
        ind = Math.floor(Math.random() * len);
        // Decrease the len value for getting the current index
        len--;
        // Swap the value of the current index of new array with the randomize one and vice versa
        _a = [newArr[ind], newArr[len]], newArr[len] = _a[0], newArr[ind] = _a[1];
    }
    // Make sure it return a new array (immutable value)
    return newArr;
};

export { duplication, duplicationGroup, filter, flatten, flattenAsync, nested, nestedAsync, order, pageInfo, pages, paginate, pagination, search, searchBy, shuffle, sort, sortBy, take, uniq };
