import { assert } from './assert';

import {
  isString,
  isUint8Array
} from './is';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function encodeString(str: string): Uint8Array {
  assert(isString(str), `"str" must be of type string, got ${typeof str}`, 'encodeString');

  return encoder.encode(str);
}

export function decodeString(bytes: Uint8Array): string {
  assert(isUint8Array(bytes), `"bytes" must be of type Uint8Array, got ${typeof bytes}`, 'decodeString');

  return decoder.decode(bytes);
}
