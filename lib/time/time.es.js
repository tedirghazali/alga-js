var relative = function (dateValue, timeZone, locale, options, defaultValue) {
    if (timeZone === void 0) { timeZone = 'utc'; }
    if (locale === void 0) { locale = 'en-US'; }
    if (options === void 0) { options = {}; }
    var nowDate = new Date();
    var valDate = new Date(dateValue);
    if (timeZone !== 'utc') {
        valDate = new Date(new Date(dateValue).toJSON());
    }
    var seconds = Math.round((valDate.valueOf() - nowDate.valueOf()) / 1000);
    var newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(Math.round(seconds), 'second');
    var interval = seconds / 31536000;
    if (Math.abs(interval) > 1) {
        var newInterval = Math.round(interval);
        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'year');
    }
    else {
        interval = seconds / 2592000;
        if (Math.abs(interval) > 1) {
            var newInterval = Math.round(interval);
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'month');
        }
        else {
            interval = seconds / 86400;
            if (Math.abs(interval) > 1) {
                var newInterval = Math.round(interval);
                newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'day');
            }
            else {
                interval = seconds / 3600;
                if (Math.abs(interval) > 1) {
                    var newInterval = Math.round(interval);
                    newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'hour');
                }
                else {
                    interval = seconds / 60;
                    if (Math.abs(interval) > 1) {
                        var newInterval = Math.round(interval);
                        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'minute');
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

export { hoursInBetween, relative };
