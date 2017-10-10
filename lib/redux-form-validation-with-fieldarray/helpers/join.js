"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function
 * @name join
 * @param {object} rules
 * @returns {object} return rule and rule return error
 */
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

exports.default = join;