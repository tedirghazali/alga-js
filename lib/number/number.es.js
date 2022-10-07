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

var unit = function (value, digits, type) {
    if (digits === void 0) { digits = 2; }
    if (type === void 0) { type = 'normal'; }
    var lookup = [
        { id: 1, value: 1, symbol: '' },
        { id: 2, value: 1e3, symbol: 'K' },
        { id: 3, value: 1e6, symbol: 'M' },
        { id: 4, value: 1e9, symbol: 'G' },
        { id: 5, value: 1e12, symbol: 'T' },
        { id: 6, value: 1e15, symbol: 'P' },
        { id: 7, value: 1e18, symbol: 'E' },
        { id: 8, value: 1e21, symbol: 'Z' },
        { id: 9, value: 1e24, symbol: 'Y' }
    ];
    if (type !== 'normal') {
        lookup = lookup.map(function (item) {
            if (type === 'decimal') {
                if (item.id === 2) {
                    item.symbol = 'k';
                }
            }
            else if (type === 'money') {
                if (item.id === 4) {
                    item.symbol = 'B';
                }
            }
            else if (type === 'binary') {
                if (item.id !== 1) {
                    item.value = item.value + (24 * (item.id - 1));
                    item.symbol = item.symbol + 'i';
                }
            }
            else if (type === 'byte') {
                if (item.id !== 1) {
                    item.value = item.value + (24 * (item.id - 1));
                    item.symbol = item.symbol + 'B';
                }
            }
            return item;
        });
    }
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return Number(value) >= item.value;
    });
    return item ? (Number(value) / item.value).toFixed(digits).replace(rx, '$1') + '' + item.symbol : '0';
};

var spaceBetween = function (numArg) {
    return String(numArg).replace(/\d{4}(?=.)/g, '$& ');
};

var roundOf = function (numArg) {
    var lookup = [1, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24];
    var item = lookup.slice().reverse().find(function (item) {
        return Number(numArg) >= item;
    });
    return Math.round(Number(numArg) / item) * item;
};

export { percentage, roundOf, separator, spaceBetween, unit };
