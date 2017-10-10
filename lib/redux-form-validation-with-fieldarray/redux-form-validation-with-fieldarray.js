'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lruMemoize = require('lru-memoize');

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

var _join = require('./helpers/join');

var _join2 = _interopRequireDefault(_join);

var _isFunction = require('./helpers/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @function
 * @name createReduxFormValidator
 * @param {object} rules
 * @returns {object} errors
 */
var createReduxFormValidator = function createReduxFormValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      if (Array.isArray(rules[key]) || (0, _isFunction2.default)(rules[key]) && Array.isArray(rules[key]())) {
        var rule = (0, _join2.default)([].concat((0, _isFunction2.default)(rules[key]) ? rules[key](data[key], data) : rules[key]));
        var error = rule(data[key], data);
        if (error) {
          errors[key] = error;
        }
      } else {
        var subErrors = [];
        Object.keys(rules[key]).forEach(function (subKey) {
          if (data[key] && data[key].length > 0) {
            var itemIsFunction = (0, _isFunction2.default)(rules[key][subKey]);
            data[key].forEach(function (item, index) {
              var rule = (0, _join2.default)([].concat(itemIsFunction ? rules[key][subKey](item[subKey], data, index) : rules[key][subKey]));
              subErrors[index] = _extends({}, subErrors[index], _defineProperty({}, subKey, rule(item[subKey], data)));
            });
            if (!errors[key]) {
              errors[key] = {};
            }
          }
        });

        if (subErrors.length !== 0) {
          errors[key] = subErrors;
        }
      }
    });
    return errors;
  };
};

exports.default = (0, _lruMemoize2.default)(10)(createReduxFormValidator);