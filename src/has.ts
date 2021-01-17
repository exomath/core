import { isObject } from '.';

export function hasOwnProperty(value: any, property: string): boolean {
  return isObject(value) && value.hasOwnProperty(property);
}

export function hasType(value: any, type: string): boolean {
  return hasOwnProperty(value, 'type') && value.type === type;
}