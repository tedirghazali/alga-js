'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

var daysInBetween = function (startDate, endDate, modeDate) {
    if (modeDate === void 0) { modeDate = 'dateTime'; }
    var startNum = modeDateHelper(startDate, modeDate);
    var endNum = modeDateHelper(endDate, modeDate);
    var timeDifference = Number(endNum) - Number(startNum);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};

var doubleFormat = function (arg) {
    var newStr = String(arg);
    if (newStr.length === 1) {
        newStr = '0' + newStr;
    }
    return newStr;
};

var relative = function (dateValue, timeZone, locale, options, defaultValue) {
    if (timeZone === void 0) { timeZone = 'utc'; }
    if (locale === void 0) { locale = 'en-US'; }
    if (options === void 0) { options = {}; }
    if (defaultValue === void 0) { defaultValue = 'new'; }
    var nowDate = new Date();
    var valDate = new Date(dateValue);
    if (timeZone !== 'utc') {
        valDate = new Date(new Date(dateValue).toJSON());
    }
    var newTimeRelative = "".concat(defaultValue);
    var compareDate = daysInBetween(valDate, nowDate);
    if (Number(compareDate) <= 365) {
        if (Number(compareDate) <= 28) {
            if (Number(nowDate.getDate()) === Number(valDate.getDate())) {
                if (Number(nowDate.getHours()) === Number(valDate.getHours())) {
                    if (Number(nowDate.getMinutes()) === Number(valDate.getMinutes())) {
                        var subSecondVal = Number(valDate.getSeconds()) - Number(nowDate.getSeconds());
                        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subSecondVal, 'second');
                    }
                    else {
                        var subMinuteVal = Number(valDate.getMinutes()) - Number(nowDate.getMinutes());
                        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subMinuteVal, 'minute');
                    }
                }
                else {
                    var subHourVal = Number(valDate.getHours()) - Number(nowDate.getHours());
                    newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subHourVal, 'hour');
                }
            }
            else {
                if (isBefore(valDate, nowDate)) {
                    compareDate = Number('-' + daysInBetween(valDate, nowDate));
                }
                else {
                    compareDate = daysInBetween(valDate, nowDate);
                }
                newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(compareDate, 'day');
            }
        }
        else {
            var subMonthVal = Number("".concat(valDate.getFullYear()).concat(doubleFormat(valDate.getMonth()))) - Number("".concat(nowDate.getFullYear()).concat(doubleFormat(nowDate.getMonth())));
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subMonthVal, 'month');
        }
    }
    else {
        var subYearVal = Number(valDate.getFullYear()) - Number(nowDate.getFullYear());
        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subYearVal, 'year');
    }
    return newTimeRelative;
};

exports.relative = relative;
