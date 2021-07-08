import { expect } from 'chai';

import {
  describe,
  it
} from 'mocha';

import {
  isArray,
  isBoolean,
  isInfinity,
  isInteger,
  isIntegerArray,
  isNaN,
  isNull,
  /* isObject,
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

// isArray(value)
describe('isArray(value)', () => {
  it('Should be a function', () => {
    expect(isArray).to.be.a('function');
  });

  it('Should should return true when "value" is type any[]', () => {
    expect(isArray([1, '2', true])).to.equal(true);
  });

  it('Should should return false when "value" is not type any[]', () => {
    expect(isArray(1)).to.equal(false);
  });
});

// isBoolean(value)
describe('isBoolean(value)', () => {
  it('Should be a function', () => {
    expect(isBoolean).to.be.a('function');
  });

  it('Should return true when "value" is type boolean', () => {
    expect(isBoolean(true)).to.equal(true);
    expect(isBoolean(false)).to.equal(true);
  });

  it('Should return false when "value" is not type boolean', () => {
    expect(isBoolean('This is a string')).to.equal(false);
    expect(isBoolean(100)).to.equal(false);
    expect(isBoolean([])).to.equal(false);
    expect(isBoolean({})).to.equal(false);
  });
});

// isInfinity(value)
describe('isInfinity(value)', () => {
  it('Should be a function', () => {
    expect(isInfinity).to.be.a('function');
  });

  it('Should return true when "value" is Infinity', () => {
    expect(isInfinity(Infinity)).to.equal(true);
  });

  it('Should return false when "value" is not Infinity', () => {
    expect(isInfinity('This is a string')).to.equal(false);
  });
});

// isInteger(value)
describe('isInteger(value)', () => {
  it('Should be a function', () => {
    expect(isInteger).to.be.a('function');
  });

  it('Should return true when "value" is an Integer', () => {
    expect(isInteger(24)).to.equal(true);
  });

  it('Should return false when "value" is not an Integer', () => {
    expect(isInteger(24.245)).to.equal(false);
  });
});

// isIntegerArray(value)
describe('isIntegerArray(value)', () => {
  it('Should be a function', () => {
    expect(isIntegerArray).to.be.a('function');
  });

  it('Should return true when "value" is type number[] and each array entry is an integer', () => {
    expect(isIntegerArray([1, 2, 3])).to.equal(true);
  });

  it('Should return false when "value" is not type number[]', () => {
    expect(isIntegerArray([1, '2', true])).to.equal(false);
  });

  it('Should return false when "value" is type number[] but not every array entry is an integer', () => {
    expect(isIntegerArray([1, 2.2, 3.3])).to.equal(false);
  });
});

// isNaN(value)
describe('isNaN(value)', () => {
  it('Should be a function', () => {
    expect(isNaN).to.be.a('function');
  });

  it('Should return true when "value" is NaN', () => {
    expect(isNaN(NaN)).to.equal(true);
  });

  it('Should return false when "value" is not NaN', () => {
    expect(isNaN(24.245)).to.equal(false);
  });
});

// isNull(value)
describe('isNull(value)', () => {
  it('Should be a function', () => {
    expect(isNull).to.be.a('function');
  });

  it('Should return true when "value" is null', () => {
    expect(isNull(null)).to.equal(true);
  });

  it('Should return false when "value" is not null', () => {
    expect(isNull(24.245)).to.equal(false);
  });
});
