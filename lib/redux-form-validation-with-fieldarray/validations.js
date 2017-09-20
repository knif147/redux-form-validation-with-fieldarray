'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var validations = {
  required: required,
  alphabet: alphabet
};

exports.default = validations;