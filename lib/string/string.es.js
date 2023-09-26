/******************************************************************************
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
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var urlEncode = function (text, type) {
    if (type === void 0) { type = 'raw'; }
    var newString = encodeURI(text);
    if (type === 'param') {
        newString = encodeURIComponent(text);
    }
    return newString;
};
var urlDecode = function (text, type) {
    if (type === void 0) { type = 'raw'; }
    var newString = decodeURI(text);
    if (type === 'param') {
        newString = decodeURIComponent(text);
    }
    return newString;
};
var urlEncodeAsync = function (textPromise, type) {
    if (type === void 0) { type = 'raw'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(textPromise)];
                case 1:
                    text = _a.sent();
                    return [2 /*return*/, Promise.resolve(urlEncode(text, type))];
            }
        });
    });
};
var urlDecodeAsync = function (textPromise, type) {
    if (type === void 0) { type = 'raw'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve(textPromise)];
                case 1:
                    text = _a.sent();
                    return [2 /*return*/, Promise.resolve(urlDecode(text, type))];
            }
        });
    });
};
var urlData = function (content, type) {
    return "data:".concat(type, ";base64,").concat(content);
};

var uniqid = function (lastId) {
    if (lastId === void 0) { lastId = 0; }
    var newId = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var times = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, '')));
    if (Number(lastId) >= 1) {
        newId += String(Number(lastId) + 1);
    }
    for (var i = 0; i < times.length; i++) {
        newId += chars.charAt(Math.floor(Math.random() * chars.length));
        newId += times.charAt(i);
    }
    return newId;
};

var random = function (size, type) {
    if (size === void 0) { size = 11; }
    if (type === void 0) { type = ''; }
    var randomString = '';
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?';
    if (type === 'alphadash') {
        characters = characters.slice(0, 64);
    }
    else if (type === 'alphanumeric') {
        characters = characters.slice(0, 62);
    }
    else if (type === 'alpha') {
        characters = characters.slice(10, 62);
    }
    else if (type === 'hex') {
        characters = characters.slice(0, 16);
    }
    else if (type === 'numeric') {
        characters = characters.slice(0, 10);
    }
    for (var i = 0; i < size; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};

var capitalize = function (str, opt) {
    if (opt === void 0) { opt = ''; }
    var capStr = str;
    if (opt === 'multiple') {
        capStr = capStr.toLowerCase().replace(/\w\S*/g, function (w) { return (w.replace(/^\w/, function (c) { return c.toUpperCase(); })); });
    }
    else if (opt === 'single') {
        capStr = capStr.toLowerCase().trimStart().replace(/^\w/, function (c) { return c.toUpperCase(); });
    }
    else {
        capStr = capStr.trimStart().replace(/^\w/, function (c) { return c.toUpperCase(); });
    }
    return capStr;
};

var camelCase = function (strCase) {
    var newCase = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&');
    newCase = capitalize(newCase, 'multiple');
    return newCase.trimStart().replace(/^\w/, function (c) { return c.toLowerCase(); }).replaceAll(' ', '');
};
var pascalCase = function (strCase) {
    var newCase = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&');
    newCase = capitalize(newCase, 'multiple');
    return newCase.replaceAll(' ', '');
};
var snakeCase = function (strCase) {
    var newCase = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&');
    newCase = capitalize(newCase, 'multiple');
    return newCase.replaceAll(' ', '').replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (match, offset) {
        return (offset > 0 ? '_' : '') + match.toLowerCase();
    });
};
var kebabCase = function (strCase) {
    var newCase = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&');
    newCase = capitalize(newCase, 'multiple');
    return newCase.replaceAll(' ', '').replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (match, offset) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
    });
};

var slug = function (val, max, duplicate) {
    if (max === void 0) { max = 0; }
    if (duplicate === void 0) { duplicate = 0; }
    var newVal = val.trim();
    // Make the string lowercase and nomalize or replace accented characters or swap ñ for n.
    newVal = newVal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // only allow lowercase chars and numbers, replace spaces and dashes to single dash.
    newVal = newVal.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    if (Number(max) > 0) {
        newVal = newVal.slice(0, Number(max));
    }
    if (Number(duplicate) > 0) {
        newVal = newVal + '-' + duplicate;
    }
    return newVal;
};

export { camelCase, capitalize, kebabCase, pascalCase, random, slug, snakeCase, uniqid, urlData, urlDecode, urlDecodeAsync, urlEncode, urlEncodeAsync };
