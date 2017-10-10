'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.integer = integer;
var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '' || typeof value === 'string' && value.trim() === '';
};

function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
  return null;
}

function alphabet(value) {
  if (!/^[a-zA-Z\s]+$/.test(value)) {
    return 'Alphabet';
  }
  return null;
}

function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Integer Only';
  }
  return null;
}

var validations = {
  required: required,
  integer: integer,
  alphabet: alphabet
};

exports.default = validations;