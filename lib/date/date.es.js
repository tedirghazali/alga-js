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
    var numOfDays = Number(new Date(Date.UTC(Number(yearNum), Number(monthNum), 0)).getUTCDate());
    return (commonDays.includes(numOfDays)) ? numOfDays : 31;
};
var daysOfPrevMonth = function (yearNum, monthNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    if (monthNum === void 0) { monthNum = getMonthHelper(); }
    var prevDays = [];
    var getDays = Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, 1)).getUTCDay());
    for (var i = Number(getDays) - 1; i >= 0; i--) {
        prevDays.push(Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, Number('-' + i))).getUTCDate()));
    }
    return prevDays;
};
var daysOfNextMonth = function (yearNum, monthNum) {
    if (yearNum === void 0) { yearNum = getYearHelper(); }
    if (monthNum === void 0) { monthNum = getMonthHelper(); }
    var getDays = Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, daysInMonth(yearNum, monthNum))).getUTCDay());
    return (6 - Number(getDays)) + 7;
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

export { daysInBetween, daysInMonth, daysInYear, daysOfNextMonth, daysOfPrevMonth, isAfter, isBefore, isBetween, monthsInBetween, yearsInBetween };
