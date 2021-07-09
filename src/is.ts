export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean' || value instanceof Boolean;
}

export function isInfinity(value: any): value is number {
  return isNumber(value) && !isNaN(value) && !isFinite(value);
}

export function isInteger(value: any): value is number {
  return isNumber(value) && Number.isInteger(value);
}

export function isIntegerArray(value: any): value is number[] {
  return isArray(value) && value.every((item: any) => isInteger(item));
}

export function isNaN(value: any): value is number {
  return isNumber(value) && Number.isNaN(value);
}

export function isNull(value: any): value is null {
  return value === null;
}

export function isObject(value: any): value is object {
  return typeof value === 'object';
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' || value instanceof Number;
}

export function isNumberArray(value: any): value is number[] {
  return isArray(value) && value.every((item: any) => isNumber(item));
}

export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isStringArray(value: any): value is string[] {
  return isArray(value) && value.every((item: any) => isString(item));
}

// TypedArrays

export function isInt8Array(value: any): value is Int8Array {
  return value instanceof Int8Array;
}

export function isUint8Array(value: any): value is Uint8Array {
  return value instanceof Uint8Array;
}

export function isUint8ClampedArray(value: any): value is Uint8ClampedArray {
  return value instanceof Uint8ClampedArray;
}

export function isInt16Array(value: any): value is Int16Array {
  return value instanceof Int16Array;
}

export function isUint16Array(value: any): value is Uint16Array {
  return value instanceof Uint16Array;
}

export function isInt32Array(value: any): value is Int32Array {
  return value instanceof Int32Array;
}

export function isUint32Array(value: any): value is Uint32Array {
  return value instanceof Uint32Array;
}

// Not currently supporting BigInt64Array and BigUint64Array

export function isFloat32Array(value: any): value is Float32Array {
  return value instanceof Float32Array;
}

export function isFloat64Array(value: any): value is Float64Array {
  return value instanceof Float64Array;
}

export type IntArray = Int8Array | Int16Array | Int32Array;

export function isIntArray(value: any): value is IntArray {
  return isInt8Array(value)
      || isInt16Array(value)
      || isInt32Array(value);
}

export type UintArray = Uint8Array | Uint16Array | Uint32Array;

export function isUintArray(value: any): value is UintArray {
  return isUint8Array(value)
      || isUint16Array(value)
      || isUint32Array(value);
}

export type FloatArray = Float32Array | Float64Array;

export function isFloatArray(value: any): value is FloatArray {
  return isFloat32Array(value)
      || isFloat64Array(value);
}

export type TypedArray = IntArray | UintArray | FloatArray;

export function isTypedArray(value: any): value is TypedArray {
  return isIntArray(value)
      || isUintArray(value)
      || isFloatArray(value);
}
