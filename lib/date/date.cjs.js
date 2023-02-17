'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doubleFormat = function (arg) {
    var newStr = String(arg);
    if (newStr.length === 1) {
        newStr = '0' + newStr;
    }
    return newStr;
};

var format = function (date, type, locale, options) {
    if (type === void 0) { type = ''; }
    if (locale === void 0) { locale = ''; }
    if (options === void 0) { options = {}; }
    var newDate = new Date(date || null);
    var newValue = "".concat(newDate.getFullYear(), "-").concat(doubleFormat(Number(newDate.getMonth()) + 1), "-").concat(doubleFormat(newDate.getDate()), " ").concat(doubleFormat(newDate.getHours()), ":").concat(doubleFormat(newDate.getMinutes()), ":").concat(doubleFormat(newDate.getSeconds()));
    if (locale === '' && (options === null || options === void 0 ? void 0 : options.timeZone) === 'UTC') {
        newValue = "".concat(newDate.getUTCFullYear(), "-").concat(doubleFormat(Number(newDate.getUTCMonth()) + 1), "-").concat(doubleFormat(newDate.getUTCDate()), " ").concat(doubleFormat(newDate.getUTCHours()), ":").concat(doubleFormat(newDate.getUTCMinutes()), ":").concat(doubleFormat(newDate.getUTCSeconds()));
    }
    if (type === 'date') {
        newValue = "".concat(newDate.getFullYear(), "-").concat(doubleFormat(Number(newDate.getMonth()) + 1), "-").concat(doubleFormat(newDate.getDate()));
        if (locale === '' && (options === null || options === void 0 ? void 0 : options.timeZone) === 'UTC') {
            newValue = "".concat(newDate.getUTCFullYear(), "-").concat(doubleFormat(Number(newDate.getUTCMonth()) + 1), "-").concat(doubleFormat(newDate.getUTCDate()));
        }
        if (locale !== '') {
            newValue = newDate.toLocaleDateString(locale, options);
        }
    }
    else if (type === 'time') {
        newValue = "".concat(doubleFormat(newDate.getHours()), ":").concat(doubleFormat(newDate.getMinutes()), ":").concat(doubleFormat(newDate.getSeconds()));
        if (locale === '' && (options === null || options === void 0 ? void 0 : options.timeZone) === 'UTC') {
            newValue = "".concat(doubleFormat(newDate.getUTCHours()), ":").concat(doubleFormat(newDate.getUTCMinutes()), ":").concat(doubleFormat(newDate.getUTCSeconds()));
        }
        if (locale !== '') {
            newValue = newDate.toLocaleTimeString(locale, options);
        }
    }
    else {
        if (locale !== '') {
            newValue = newDate.toLocaleString(locale, options);
        }
    }
    return newValue;
};

var now = function (type, locale, options) {
    if (type === void 0) { type = ''; }
    if (locale === void 0) { locale = ''; }
    if (options === void 0) { options = {}; }
    var newDate = new Date();
    return format(newDate, type, locale, options);
};

var modeDateHelper = function (date, mode) {
    var numberDate = 0;
    var jsonDate = new Date(date).toJSON().split(/T|\./);
    if (mode === 'date') {
        numberDate = Number(jsonDate[0].replaceAll('-', ''));
    }
    else if (mode === 'time') {
        numberDate = Number(jsonDate[1].replaceAll(':', ''));
    }
    else {
        numberDate = new Date(date).valueOf();
    }
    return numberDate;
};
var getYearHelper = function () {
    return Number(new Date().getFullYear());
};
var getMonthHelper = function () {
    return Number(new Date().getMonth());
};

var isBefore = function (isDate, beforeDate, modeDate) {
    if (modeDate === void 0) { modeDate = 'dateTime'; }
    var startNum = modeDateHelper(isDate, modeDate);
    var endNum = modeDateHelper(beforeDate, modeDate);
    var resultDate = false;
    if (startNum < endNum) {
        resultDate = true;
    }
    return resultDate;
};
var isAfter = function (isDate, afterDate, modeDate) {
    if (modeDate === void 0) { modeDate = 'dateTime'; }
    var startNum = modeDateHelper(isDate, modeDate);
    var endNum = modeDateHelper(afterDate, modeDate);
    var resultDate = false;
    if (startNum > endNum) {
        resultDate = true;
    }
    return resultDate;
};
var isBetween = function (isDate, startDate, endDate, modeDate) {
    if (modeDate === void 0) { modeDate = 'dateTime'; }
    var isNum = modeDateHelper(isDate, modeDate);
    var startNum = modeDateHelper(startDate, modeDate);
    var endNum = modeDateHelper(endDate, modeDate);
    var resultDate = false;
    if (isNum >= startNum && isNum <= endNum) {
        resultDate = true;
    }
    return resultDate;
};

var daysInMonth = function (yearNum, monthNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    if (monthNum === void 0) { monthNum = getMonthHelper(); }
    var commonDays = [28, 29, 30, 31];
    var numOfDays = Number(new Date(yearNum, monthNum, 0).getDate());
    return (commonDays.includes(numOfDays)) ? numOfDays : 31;
};
var daysOfPrevMonth = function (yearNum, monthNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    if (monthNum === void 0) { monthNum = getMonthHelper(); }
    var prevDays = [];
    var getDays = Number(new Date(yearNum, Number(monthNum) - 1, 1).getDay());
    for (var i = Number(getDays) - 1; i >= 0; i--) {
        prevDays.push(Number(new Date(yearNum, Number(monthNum) - 1, Number('-' + i)).getDate()));
    }
    return prevDays;
};
var daysOfNextMonth = function (yearNum, monthNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    if (monthNum === void 0) { monthNum = getMonthHelper(); }
    var getDays = Number(new Date(yearNum, Number(monthNum) - 1, daysInMonth(yearNum, monthNum)).getDay());
    var nextMonthDays = 6 - Number(getDays);
    var totalMonthDays = Number(daysInMonth(yearNum, monthNum)) + Number(daysOfPrevMonth(yearNum, monthNum).length) + Number(nextMonthDays);
    return Number(nextMonthDays) + (42 - Number(totalMonthDays));
};
var daysInYear = function (yearNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    return (Number(yearNum) % 400 === 0 || (Number(yearNum) % 100 !== 0 && Number(yearNum) % 4 === 0)) ? 366 : 365;
};
var daysInBetween = function (startDate, endDate, modeDate) {
    if (modeDate === void 0) { modeDate = 'dateTime'; }
    var startNum = modeDateHelper(startDate, modeDate);
    var endNum = modeDateHelper(endDate, modeDate);
    var timeDifference = Number(endNum) - Number(startNum);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};
var monthsInBetween = function (startDate, endDate) {
    var calcMonth = Number(new Date(endDate).getMonth()) - Number(new Date(startDate).getMonth());
    var calcYear = (Number(new Date(endDate).getFullYear()) - Number(new Date(startDate).getFullYear())) * 12;
    return Math.floor(calcMonth + calcYear);
};
var yearsInBetween = function (startDate, endDate) {
    return Math.floor(monthsInBetween(startDate, endDate) / 12);
};

var month = function (yearArg, monthArg, locale, monthType) {
    if (yearArg === void 0) { yearArg = getYearHelper(); }
    if (monthArg === void 0) { monthArg = getMonthHelper(); }
    if (locale === void 0) { locale = 'en-US'; }
    if (monthType === void 0) { monthType = 'long'; }
    var currentMonth = new Date(yearArg, Number(monthArg) - 1);
    //@ts-ignore
    return new Intl.DateTimeFormat(locale, { month: monthType }).format(currentMonth);
};
var months = function (locale, monthType) {
    if (locale === void 0) { locale = 'en-US'; }
    if (monthType === void 0) { monthType = 'long'; }
    var newMonths = [];
    var newYear = Number(new Date().getFullYear());
    for (var i = 0; i <= 11; i++) {
        var newObj = {};
        var currentMonth = new Date(newYear, i);
        newObj['value'] = doubleFormat(Number(i) + 1);
        //@ts-ignore
        newObj['text'] = new Intl.DateTimeFormat(locale, { month: monthType }).format(currentMonth);
        newMonths.push(newObj);
    }
    return newMonths;
};

var years = function (year, ellipsis) {
    if (year === void 0) { year = new Date().getFullYear(); }
    if (ellipsis === void 0) { ellipsis = 5; }
    var newYears = [];
    var prevYear = Number(year) - (Number(ellipsis) + 1);
    var nextYear = Number(year) + Number(ellipsis);
    for (var i = prevYear; i <= nextYear; i++) {
        newYears.push(i);
    }
    return newYears;
};

exports.daysInBetween = daysInBetween;
exports.daysInMonth = daysInMonth;
exports.daysInYear = daysInYear;
exports.daysOfNextMonth = daysOfNextMonth;
exports.daysOfPrevMonth = daysOfPrevMonth;
exports.doubleFormat = doubleFormat;
exports.format = format;
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isBetween = isBetween;
exports.month = month;
exports.months = months;
exports.monthsInBetween = monthsInBetween;
exports.now = now;
exports.years = years;
exports.yearsInBetween = yearsInBetween;
