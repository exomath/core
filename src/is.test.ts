import { expect } from 'chai';

import {
  isArray,
  /*isBoolean,
  isInfinity,
  isInteger,
  isIntegerArray,
  isNaN,
  isNull,
  isObject,
  isNumber,
  isNumberArray,
  isString,
  isStringArray,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isIntArray,
  isUintArray,
  isFloatArray,
  isTypedArray*/
} from './is';

describe('isArray', () => {
  it('Should be a function', () => {
    expect(isArray).to.be.a('function');
  });

  it('Should should return true when "value" is of type any[]', () => {
    expect(isArray([1, '2', true])).to.equal(true);
  });

  it('Should should return false when "value" is not of type any[]', () => {
    expect(isArray(1)).to.equal(false);
  });
});