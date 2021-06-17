import {
  isNull,
  isObject
} from './is';

export function hasOwnProperty(value: any, property: string): boolean {
  return isObject(value) && !isNull(value) && value.hasOwnProperty(property);
}

export function hasType(value: any, type: string): boolean {
  return hasOwnProperty(value, 'type') && value.type === type;
}
