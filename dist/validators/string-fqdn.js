"use strict";
exports.__esModule = true;
var typeable_1 = require("typeable");
function stringFQDN(value, options) {
    if (options === void 0) { options = {}; }
    var _a = options.requireTld, requireTld = _a === void 0 ? true : _a, _b = options.allowUnderscores, allowUnderscores = _b === void 0 ? false : _b, _c = options.allowTrailingDot, allowTrailingDot = _c === void 0 ? false : _c;
    if (!typeable_1.isString(value))
        return false;
    if (allowTrailingDot && value[value.length - 1] === '.') {
        value = value.substring(0, value.length - 1);
    }
    var parts = value.split('.');
    if (requireTld) {
        var tld = parts.pop();
        if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
        }
    }
    for (var part = void 0, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (allowUnderscores) {
            if (part.indexOf('__') >= 0) {
                return false;
            }
            else {
                part = part.replace(/_/g, '');
            }
        }
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
        }
        else if (/[\uff01-\uff5e]/.test(part)) {
            return false; // disallow full-width chars
        }
        else if (part[0] === '-' || part[part.length - 1] === '-') {
            return false;
        }
    }
    return true;
}
exports.stringFQDN = stringFQDN;
