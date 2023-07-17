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

exports.hoursInBetween = hoursInBetween;
exports.reading = reading;
exports.relative = relative;
