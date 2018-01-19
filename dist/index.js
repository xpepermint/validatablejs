"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
exports.__esModule = true;
var merge = require("lodash.merge");
var typeable_1 = require("typeable");
var builtInValidators = require("./validators");
/*
* A core validation class.
*/
var Validator = /** @class */ (function () {
    /*
    * Class constructor.
    */
    function Validator(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.failFast, failFast = _c === void 0 ? false : _c, _d = _b.validators, validators = _d === void 0 ? {} : _d, _e = _b.context, context = _e === void 0 ? null : _e;
        this.failFast = failFast;
        this.validators = merge(builtInValidators, validators);
        this.context = context;
    }
    /*
    * Returns a new instance of ValidatorError instance.
    */
    Validator.prototype._createValidatorError = function (recipe) {
        var validator = recipe.validator, _a = recipe.code, code = _a === void 0 ? 422 : _a;
        var message = typeof recipe.message === 'function'
            ? recipe.message()
            : recipe.message;
        message = this._createString(message, recipe); // apply variables to a message
        return { validator: validator, message: message, code: code };
    };
    /*
    * Replaces variables in a string (e.g. `%{variable}`) with object key values.
    */
    Validator.prototype._createString = function (template, data) {
        if (!template) {
            return template;
        }
        for (var key in data) {
            template = template.replace("%{" + key + "}", data[key]);
        }
        return template;
    };
    /*
    * Validates the `value` against the `validations`.
    */
    Validator.prototype.validate = function (value, recipes) {
        if (recipes === void 0) { recipes = []; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var errors, _loop_1, this_1, _i, recipes_1, recipe, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errors = [];
                        _loop_1 = function (recipe) {
                            var condition, result, name, validator, isValid;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        condition = recipe.condition;
                                        if (!condition) return [3 /*break*/, 2];
                                        return [4 /*yield*/, condition.call(this_1.context, value, recipe)];
                                    case 1:
                                        result = _a.sent();
                                        if (!result)
                                            return [2 /*return*/, "continue"];
                                        _a.label = 2;
                                    case 2:
                                        name = recipe.validator;
                                        validator = this_1.validators[name];
                                        if (!validator) {
                                            throw new Error("Unknown validator " + name);
                                        }
                                        return [4 /*yield*/, Promise.all((typeable_1.isArray(value) ? value : [value])
                                                .map(function (v) { return validator.call(_this.context, v, recipe); })).then(function (r) { return r.indexOf(false) === -1; })];
                                    case 3:
                                        isValid = _a.sent();
                                        if (!isValid) {
                                            errors.push(this_1._createValidatorError(recipe));
                                            if (this_1.failFast)
                                                return [2 /*return*/, "break"];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, recipes_1 = recipes;
                        _a.label = 1;
                    case 1:
                        if (!(_i < recipes_1.length)) return [3 /*break*/, 4];
                        recipe = recipes_1[_i];
                        return [5 /*yield**/, _loop_1(recipe)];
                    case 2:
                        state_1 = _a.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, errors];
                }
            });
        });
    };
    return Validator;
}());
exports.Validator = Validator;
