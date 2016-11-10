"use strict";
var typeable_1 = require("typeable");
function stringFQDN(value, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.requireTld, requireTld = _c === void 0 ? true : _c, _d = _b.allowUnderscores, allowUnderscores = _d === void 0 ? false : _d, _e = _b.allowTrailingDot, allowTrailingDot = _e === void 0 ? false : _e;
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
