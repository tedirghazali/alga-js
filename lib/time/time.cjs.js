'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var relative = function (dateValue, timeZone, locale, options, type) {
    if (timeZone === void 0) { timeZone = 'utc'; }
    if (locale === void 0) { locale = 'en-US'; }
    if (options === void 0) { options = {}; }
    if (type === void 0) { type = 'long'; }
    var nowDate = new Date();
    var valDate = new Date(dateValue);
    if (timeZone !== 'utc') {
        valDate = new Date(new Date(dateValue).toJSON());
    }
    var seconds = Math.round((valDate.valueOf() - nowDate.valueOf()) / 1000);
    var newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(seconds, 'second');
    if (type === 'short') {
        newTimeRelative = "".concat(Math.abs(Math.round(seconds)), "s");
    }
    var interval = seconds / 31536000;
    if (Math.abs(interval) > 1) {
        var newInterval = Math.round(interval);
        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'year');
        if (type === 'short') {
            newTimeRelative = "".concat(Math.abs(Math.round(newInterval)), "y");
        }
    }
    else {
        interval = seconds / 2592000;
        if (Math.abs(interval) > 1) {
            var newInterval = Math.round(interval);
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'month');
            if (type === 'short') {
                newTimeRelative = "".concat(Math.abs(Math.round(newInterval)), "mo");
            }
        }
        else {
            interval = seconds / 86400;
            if (Math.abs(interval) > 1) {
                var newInterval = Math.round(interval);
                newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'day');
                if (type === 'short') {
                    newTimeRelative = "".concat(Math.abs(Math.round(newInterval)), "d");
                }
            }
            else {
                interval = seconds / 3600;
                if (Math.abs(interval) > 1) {
                    var newInterval = Math.round(interval);
                    newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'hour');
                    if (type === 'short') {
                        newTimeRelative = "".concat(Math.abs(Math.round(newInterval)), "h");
                    }
                }
                else {
                    interval = seconds / 60;
                    if (Math.abs(interval) > 1) {
                        var newInterval = Math.round(interval);
                        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'minute');
                        if (type === 'short') {
                            newTimeRelative = "".concat(Math.abs(Math.round(newInterval)), "m");
                        }
                    }
                }
            }
        }
    }
    return newTimeRelative;
};

var hoursInBetween = function (startDateArg, endDateArg) {
    var startDate = new Date(startDateArg);
    var endDate = new Date(endDateArg);
    var milliseconds = Math.abs(Number(startDate.getTime()) - Number(endDate.getTime()));
    var newHours = milliseconds / 36e5;
    return Number(newHours.toFixed(0));
};

var reading = function (textArg, wpmArg, typeArg) {
    if (textArg === void 0) { textArg = ''; }
    if (wpmArg === void 0) { wpmArg = 250; }
    if (typeArg === void 0) { typeArg = 'minute'; }
    var words = textArg.split(' ').length;
    var readingTime = Number(words) / Number(wpmArg);
    if (typeArg === 'second') {
        readingTime = Number(readingTime) * 60;
    }
    else if (typeArg === 'millisecond') {
        readingTime = Number(readingTime) * 60000;
    }
    return Math.ceil(readingTime);
};

var format = function (value, separator, display) {
    var _a;
    if (separator === void 0) { separator = ':'; }
    if (display === void 0) { display = 3; }
    var newValues = (_a = value === null || value === void 0 ? void 0 : value.split(separator)) === null || _a === void 0 ? void 0 : _a.slice(0, display);
    if (newValues.length < display) {
        for (var i = 0; i < (Number(display) - Number(newValues.length)); i++) {
            newValues.push('0');
        }
    }
    return newValues.join(separator);
};

var now = function (separator, display) {
    if (separator === void 0) { separator = ':'; }
    if (display === void 0) { display = 3; }
    var newNow = new Date().toTimeString().split(' ')[0];
    newNow = format(newNow, separator, display);
    return newNow;
};

var double = function (value, separator, type) {
    if (separator === void 0) { separator = ':'; }
    if (type === void 0) { type = 'double'; }
    var newValues = value.split(separator);
    if (type === 'double') {
        newValues = newValues.map(function (i) {
            if (i.length <= 1) {
                i = '0' + i;
            }
            return i;
        });
    }
    else if (type === 'normal') {
        newValues = newValues.map(function (i, ind) {
            if (i.length <= 1 && ind >= 1) {
                i = '0' + i;
            }
            return i;
        });
    }
    return newValues.join(separator);
};

var toDecimal = function (value, fixed, separator, msDivider) {
    if (fixed === void 0) { fixed = 2; }
    if (separator === void 0) { separator = ':'; }
    if (msDivider === void 0) { msDivider = '.'; }
    var minuteDecimal = 100 / 60;
    var timeArr = value.trim().split(separator);
    var countDecimal = 0;
    if (timeArr.length >= 2) {
        countDecimal = Number(timeArr[1]) * Number(minuteDecimal);
        if (timeArr.length >= 3) {
            var secondArr = String(timeArr[2]).split(msDivider);
            var countSecond = (Number(secondArr[0]) * Number(minuteDecimal)) / 100;
            var countMillisecond = 0;
            if (secondArr.length >= 2) {
                countMillisecond = Number(secondArr[1]) / 1000;
            }
            countDecimal = Number(countDecimal) + (Number(countSecond) + Number(countMillisecond));
        }
    }
    return (Number(timeArr[0]) + (Number(countDecimal) / 100)).toFixed(fixed);
};
var fromDecimal = function (value, separator, display) {
    if (separator === void 0) { separator = ':'; }
    if (display === void 0) { display = 2; }
    var timeArr = String(value).split('.');
    var countMinute = '00';
    if (timeArr.length >= 2) {
        countMinute = (60 * Number('0.' + timeArr[1])).toFixed(2);
        countMinute = countMinute.replace('.', ':');
    }
    return format((timeArr[0] + separator + countMinute), separator, display);
};

exports.double = double;
exports.format = format;
exports.fromDecimal = fromDecimal;
exports.hoursInBetween = hoursInBetween;
exports.now = now;
exports.reading = reading;
exports.relative = relative;
exports.toDecimal = toDecimal;
