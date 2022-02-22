'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
                newSet.add(fromItem);
            }
        }
        else if (Array.isArray(fromItem) && isNaN(byNumber) === false && Number(fromItem.length) > Number(byProp)) {
            var newIndex = Number(byProp);
            if (!newSet.has(fromItem[newIndex])) {
                newArray.push(fromItem);
                newSet.add(fromItem);
            }
        }
        else {
            if (!newSet.has(fromItem)) {
                newArray.push(fromItem);
                newSet.add(fromItem);
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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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
            else if (typeof item === 'string' && item.toLowerCase().includes(searchItem.toLowerCase())) {
                return true;
            }
            else if (typeof item === 'object' && item !== null) {
                for (var _i = 0, _a = Object.keys(item); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (isNaN(item[key]) === false && Number(item[key]) === Number(searchItem)) {
                        return true;
                    }
                    else if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchItem.toLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        });
        newArray = uniq(__spreadArray(__spreadArray([], newArray, true), filterArray, true));
    };
    for (var _a = 0, searchString_1 = searchString; _a < searchString_1.length; _a++) {
        var searchItem = searchString_1[_a];
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
                    else if (typeof item[val] === 'string' && item[val].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
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
    var newSet = new Set(propVal);
    for (var _a = 0, _b = Object.keys(fromObject); _a < _b.length; _a++) {
        var key = _b[_a];
        if (!newSet.has(fromObject[key])) {
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
                else if (typeof object[ftrKey] === 'string' && object[ftrKey].toLowerCase().includes(clearObject[ftrKey].toLowerCase())) {
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

var sort = function (fromArray, sortString) {
    if (sortString === void 0) { sortString = 'asc'; }
    var newArray = Array.from(fromArray);
    if (sortString === 'asc') {
        newArray.sort(function (a, b) {
            if (isNaN(a) === false && isNaN(b) === false) {
                return Number(a) - Number(b);
            }
            else if (typeof a === 'string' && typeof b === 'string') {
                var propA = a.toLowerCase();
                var propB = b.toLowerCase();
                var propRes = 0;
                if (propA < propB) {
                    propRes = -1;
                }
                else if (propA > propB) {
                    propRes = 1;
                }
                return propRes;
            }
        });
    }
    else if (sortString === 'desc') {
        newArray.sort(function (a, b) {
            if (isNaN(a) === false && isNaN(b) === false) {
                return Number(b) - Number(a);
            }
            else if (typeof a === 'string' && typeof b === 'string') {
                var propA = a.toLowerCase();
                var propB = b.toLowerCase();
                var propRes = 0;
                if (propB < propA) {
                    propRes = -1;
                }
                else if (propB > propA) {
                    propRes = 1;
                }
                return propRes;
            }
        });
    }
    return newArray;
};
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
var sortWith = function (fromArray, compareFunc) {
    var newArray = Array.from(fromArray);
    newArray.sort(function (a, b) {
        var res = 0;
        if (Math.sign(compareFunc(a, b)) === -1) {
            res = -1;
        }
        else {
            res = 1;
        }
        return res;
    });
    return newArray;
};

var paginate = function (fromArray, pageActive, limitPerPage) {
    if (pageActive === void 0) { pageActive = 1; }
    if (limitPerPage === void 0) { limitPerPage = 10; }
    var newArray = Array.from(fromArray);
    var startPaginate = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1);
    var endPaginate = Number(limitPerPage) * Number(pageActive);
    return newArray.slice(startPaginate - 1, (endPaginate <= newArray.length) ? endPaginate : newArray.length);
};
var pages = function (fromArray, limitPerPage) {
    if (limitPerPage === void 0) { limitPerPage = 10; }
    var newArray = Array.from(fromArray);
    var divideLength = Number(newArray.length) / Number(limitPerPage);
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

exports.filter = filter;
exports.pageInfo = pageInfo;
exports.pages = pages;
exports.paginate = paginate;
exports.pagination = pagination;
exports.search = search;
exports.searchBy = searchBy;
exports.sort = sort;
exports.sortBy = sortBy;
exports.sortWith = sortWith;
exports.uniq = uniq;
