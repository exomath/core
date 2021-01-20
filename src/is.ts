export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: any): boolean {
  return typeof value === 'boolean' || value instanceof Boolean;
}

export function isInteger(value: any): boolean {
  return isNumber(value) && Number.isInteger(value);
}

export function isIntegerArray(value: any): boolean {
  return isArray(value) && value.every((item: any) => isInteger(item));
}

export function isNaN(value: any): boolean {
  return isNumber(value) && Number.isNaN(value);
}

export function isNull(value: any): boolean {
  return value === null;
}

export function isObject(value: any): boolean {
  return typeof value === 'object';
}

export function isNumber(value: any): boolean {
  return typeof value === 'number' || value instanceof Number;
}

export function isNumberArray(value: any): boolean {
  return isArray(value) && value.every((item: any) => isNumber(item));
}

export function isString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}

export function isStringArray(value: any): boolean {
  return isArray(value) && value.every((item: any) => isString(item));
}

// TypedArrays

export function isInt8Array(value: any): boolean {
  return value instanceof Int8Array;
}

export function isUint8Array(value: any): boolean {
  return value instanceof Uint8Array;
}

export function isUint8ClampedArray(value: any): boolean {
  return value instanceof Uint8ClampedArray;
}

export function isInt16Array(value: any): boolean {
  return value instanceof Int16Array;
}

export function isUint16Array(value: any): boolean {
  return value instanceof Uint16Array;
}

export function isInt32Array(value: any): boolean {
  return value instanceof Int32Array;
}

export function isUint32Array(value: any): boolean {
  return value instanceof Uint32Array;
}

// Not currently supporting BigInt64Array and BigUint64Array

export function isFloat32Array(value: any): boolean {
  return value instanceof Float32Array;
}

export function isFloat64Array(value: any): boolean {
  return value instanceof Float64Array;
}

export function isIntArray(value: any): boolean {
  return isInt8Array(value)
      || isInt16Array(value)
      || isInt32Array(value);
}

export function isUintArray(value: any): boolean {
  return isUint8Array(value)
      || isUint16Array(value)
      || isUint32Array(value);
}

export function isFloatArray(value: any): boolean {
  return isFloat32Array(value)
      || isFloat64Array(value);
}

export function isTypedArray(value: any): boolean {
  return isIntArray(value)
      || isUintArray(value)
      || isFloatArray(value);
}
