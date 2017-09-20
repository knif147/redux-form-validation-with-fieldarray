'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lruMemoize = require('lru-memoize');

var _lruMemoize2 = _interopRequireDefault(_lruMemoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

function createReduxFormValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      if (Array.isArray(rules[key])) {
        var rule = join([].concat(rules[key]));
        var error = rule(data[key], data);
        if (error) {
          errors[key] = error;
        }
      } else {
        var subErrors = [];
        var itemError = {};
        Object.keys(rules[key]).forEach(function (subKey) {
          if (data[key] && data[key].length > 0) {
            var _rule = join([].concat(rules[key][subKey]));
            data[key].forEach(function (item, index) {
              itemError[subKey] = _rule(item[subKey], data);
              subErrors[index] = itemError;
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
}

exports.default = (0, _lruMemoize2.default)(10)(createReduxFormValidator);