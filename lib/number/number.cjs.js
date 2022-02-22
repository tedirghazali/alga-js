'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var separator = function (value, separator, float) {
    if (separator === void 0) { separator = ','; }
    if (float === void 0) { float = false; }
    var locale = (separator === '.') ? 'de-DE' : 'en-US';
    var index = (separator === '.') ? 0 : 1;
    var newNumber = String(new Intl.NumberFormat(locale, { style: 'currency', currency: 'IDR' }).format(Number(value)));
    newNumber = newNumber.split(/\s/)[index];
    if (float !== true) {
        // separator will be the oposite
        var dotComma = (separator === '.') ? ',' : '.';
        newNumber = newNumber.split(dotComma)[0].trim();
    }
    return newNumber;
};

var percentage = function (curVal, fromVal, symbol) {
    if (symbol === void 0) { symbol = false; }
    var resNum = String(Math.round(((Number(curVal) / Number(fromVal)) - 1) * 100));
    if (symbol === true) {
        resNum = resNum + '%';
    }
    return resNum;
};

exports.percentage = percentage;
exports.separator = separator;
