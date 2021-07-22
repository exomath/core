import { expect } from 'chai';

import {
  describe,
  it
} from 'mocha';

import {
  isArray,
  isBoolean,
  isInfinity,
  isInt8Array,
  isInteger,
  isIntegerArray,
  isNaN,
  isNull,
  isNumber,
  isNumberArray,
  isObject,
  isString,
  isStringArray,
  /* isUint8Array,
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

  it('Should return true when "value" is type any[]', () => {
    expect(isArray([])).to.equal(true);
    expect(isArray([1, 2, 3])).to.equal(true);
    expect(isArray(['a', 'b', 'c'])).to.equal(true);
    expect(isArray([1, '2', true, {}])).to.equal(true);
  });

  it('Should return false when "value" is not type any[]', () => {
    expect(isArray('This is a string')).to.equal(false);
    expect(isArray(100)).to.equal(false);
    expect(isArray(undefined)).to.equal(false);
    expect(isArray(null)).to.equal(false);
    expect(isArray(true)).to.equal(false);
    expect(isArray(false)).to.equal(false);
    expect(isArray({})).to.equal(false);
    expect(isArray()).to.equal(false);
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
    expect(isBoolean(undefined)).to.equal(false);
    expect(isBoolean(null)).to.equal(false);
    expect(isBoolean([])).to.equal(false);
    expect(isBoolean({})).to.equal(false);
    expect(isBoolean()).to.equal(false);
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
    expect(isInfinity(Number.MAX_VALUE)).to.equal(false);
    expect(isInfinity('This is a string')).to.equal(false);
    expect(isInfinity(100)).to.equal(false);
    expect(isInfinity(undefined)).to.equal(false);
    expect(isInfinity(null)).to.equal(false);
    expect(isInfinity(true)).to.equal(false);
    expect(isInfinity(false)).to.equal(false);
    expect(isInfinity([])).to.equal(false);
    expect(isInfinity({})).to.equal(false);
    expect(isInfinity()).to.equal(false);
  });
});

// isInteger(value)
describe('isInteger(value)', () => {
  it('Should be a function', () => {
    expect(isInteger).to.be.a('function');
  });

  it('Should return true when "value" is an integer', () => {
    expect(isInteger(0)).to.equal(true);
    expect(isInteger(100)).to.equal(true);
    expect(isInteger(100.00)).to.equal(true);
  });

  it('Should return false when "value" is not an integer', () => {
    expect(isInteger('This is a String')).to.equal(false);
    expect(isInteger(100.11)).to.equal(false);
    expect(isInteger(undefined)).to.equal(false);
    expect(isInteger(null)).to.equal(false);
    expect(isInteger(true)).to.equal(false);
    expect(isInteger(false)).to.equal(false);
    expect(isInteger([])).to.equal(false);
    expect(isInteger({})).to.equal(false);
    expect(isInteger()).to.equal(false);
  });
});

// isIntegerArray(value)
describe('isIntegerArray(value)', () => {
  it('Should be a function', () => {
    expect(isIntegerArray).to.be.a('function');
  });

  it('Should return true when "value" is type number[] and each array entry is an integer', () => {
    expect(isIntegerArray([0, 0, 0])).to.equal(true);
    expect(isIntegerArray([1, 2, 3])).to.equal(true);
    expect(isIntegerArray([0.00, 1.00, 2.00, 3.00])).to.equal(true);
    expect(isIntegerArray([])).to.equal(true);
  });

  it('Should return false when "value" is not type number[]', () => {
    expect(isIntegerArray('This is a String')).to.equal(false);
    expect(isIntegerArray(100)).to.equal(false);
    expect(isIntegerArray(undefined)).to.equal(false);
    expect(isIntegerArray(null)).to.equal(false);
    expect(isIntegerArray(true)).to.equal(false);
    expect(isIntegerArray(false)).to.equal(false);
    expect(isIntegerArray(['String', 2, false])).to.equal(false);
    expect(isIntegerArray({})).to.equal(false);
    expect(isIntegerArray()).to.equal(false);
  });

  it('Should return false when "value" is type number[] but not every array entry is an integer', () => {
    expect(isIntegerArray([1.1, 2.2, 3.3])).to.equal(false);
    expect(isIntegerArray([1, 2.2, 3.3])).to.equal(false);
    expect(isIntegerArray([1, 2, 3.3])).to.equal(false);
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
    expect(isNaN('This is a String')).to.equal(false);
    expect(isNaN(100)).to.equal(false);
    expect(isNaN(undefined)).to.equal(false);
    expect(isNaN(null)).to.equal(false);
    expect(isNaN(true)).to.equal(false);
    expect(isNaN(false)).to.equal(false);
    expect(isNaN([])).to.equal(false);
    expect(isNaN({})).to.equal(false);
    expect(isNaN()).to.equal(false);
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
    expect(isNull('This is a String')).to.equal(false);
    expect(isNull(100)).to.equal(false);
    expect(isNull(undefined)).to.equal(false);
    expect(isNull(true)).to.equal(false);
    expect(isNull(false)).to.equal(false);
    expect(isNull([])).to.equal(false);
    expect(isNull({})).to.equal(false);
    expect(isNull()).to.equal(false);
  });
});

// isObject(value)
describe('isObject(value)', () => {
  it('Should be a function', () => {
    expect(isObject).to.be.a('function');
  });

  it('Should return true when "value" is type any{}', () => {
    expect(isObject({})).to.equal(true);
    expect(isObject({a:1, b:2, c:3})).to.equal(true);
    expect(isObject({a:'String', b:true, c:[], d:{}})).to.equal(true);
    expect(isObject([])).to.equal(true);
    expect(isObject(null)).to.equal(true);
  });

  it('Should return false when "value" is not type any{}', () => {
    expect(isObject('This is a string')).to.equal(false);
    expect(isObject(100)).to.equal(false);
    expect(isObject(undefined)).to.equal(false);
    expect(isObject(true)).to.equal(false);
    expect(isObject(false)).to.equal(false);
    expect(isObject()).to.equal(false);
  });
});

// isNumber(value)
describe('isNumber(value)', () => {
  it('Should be a function', () => {
    expect(isNumber).to.be.a('function');
  });

  it('Should return true when "value" is a Number', () => {
    expect(isNumber(100)).to.equal(true);
    expect(isNumber(100.25)).to.equal(true);
    expect(isNumber(0)).to.equal(true);
  });

  it('Should return false when "value" is not a Number', () => {
    expect(isNumber('This is a String')).to.equal(false);
    expect(isNumber(undefined)).to.equal(false);
    expect(isNumber(null)).to.equal(false);
    expect(isNumber(true)).to.equal(false);
    expect(isNumber(false)).to.equal(false);
    expect(isNumber([])).to.equal(false);
    expect(isNumber({})).to.equal(false);
    expect(isNumber()).to.equal(false);
  });
});

// isNumberArray(value)
describe('isNumberArray(value)', () => {
  it('Should be a function', () => {
    expect(isNumberArray).to.be.a('function');
  });

  it('Should return true when "value" is type number[]', () => {
    expect(isNumberArray([1, 2, 3])).to.equal(true);
    expect(isNumberArray([0.11, 1.11, 2.22, 3.33])).to.equal(true);
    expect(isNumberArray([])).to.equal(true);
  });

  it('Should return false when "value" is not type number[]', () => {
    expect(isNumberArray('This is a String')).to.equal(false);
    expect(isNumberArray(100)).to.equal(false);
    expect(isNumberArray(undefined)).to.equal(false);
    expect(isNumberArray(null)).to.equal(false);
    expect(isNumberArray(true)).to.equal(false);
    expect(isNumberArray(false)).to.equal(false);
    expect(isNumberArray(['String', 2, false])).to.equal(false);
    expect(isNumberArray([1, 2, 'String', true])).to.equal(false);
    expect(isNumberArray({})).to.equal(false);
    expect(isNumberArray()).to.equal(false);
  });
});

// isString(value)
describe('isString(value)', () => {
  it('Should be a function', () => {
    expect(isString).to.be.a('function');
  });

  it('Should return true when "value" is a String', () => {
    expect(isString('This is a String')).to.equal(true);
  });

  it('Should return false when "value" is not a String', () => {
    expect(isString(100)).to.equal(false);
    expect(isString(undefined)).to.equal(false);
    expect(isString(null)).to.equal(false);
    expect(isString(true)).to.equal(false);
    expect(isString(false)).to.equal(false);
    expect(isString([])).to.equal(false);
    expect(isString({})).to.equal(false);
    expect(isString()).to.equal(false);
  });
});

// isStringArray(value)
describe('isStringArray(value)', () => {
  it('Should be a function', () => {
    expect(isStringArray).to.be.a('function');
  });

  it('Should return true when "value" is type String[]', () => {
    expect(isStringArray(['String1', 'String2', 'String3'])).to.equal(true);
    expect(isStringArray(['1', '2', '3'])).to.equal(true);
    expect(isStringArray([])).to.equal(true);
  });

  it('Should return false when "value" is not type String[]', () => {
    expect(isStringArray('This is a String')).to.equal(false);
    expect(isStringArray(100)).to.equal(false);
    expect(isStringArray(undefined)).to.equal(false);
    expect(isStringArray(null)).to.equal(false);
    expect(isStringArray(true)).to.equal(false);
    expect(isStringArray(false)).to.equal(false);
    expect(isStringArray(['String', 2, false])).to.equal(false);
    expect(isStringArray({})).to.equal(false);
    expect(isStringArray()).to.equal(false);
  });
});

// isInt8Array(value)
describe('isInt8Array(value)', () => {
  it('Should be a function', () => {
    expect(isInt8Array).to.be.a('function');
  });

  it('Should return true when "value" is an Int8Array', () => {
    expect(isInt8Array(new Int8Array())).to.equal(true);
  });

  it('Should return false when "value" is not an Int8Array', () => {
    expect(isInt8Array('This is a String')).to.equal(false);
    expect(isInt8Array(100)).to.equal(false);
    expect(isInt8Array(undefined)).to.equal(false);
    expect(isInt8Array(null)).to.equal(false);
    expect(isInt8Array(true)).to.equal(false);
    expect(isInt8Array(false)).to.equal(false);
    expect(isInt8Array([])).to.equal(false);
    expect(isInt8Array({})).to.equal(false);
    expect(isInt8Array(new Float64Array())).to.equal(false);
    expect(isInt8Array()).to.equal(false);
  });
});
