import { assert } from './assert';

export class SingleRouteMap<T> extends Map<string, T> {
  public constructor(initializer?: [string, T][]) {
    initializer ? super(initializer) : super();
  }

  public get(key: string): T {
    assert(this.has(key), '"key" does not exist in this map', 'SingleRouteMap');

    const value = super.get(key);

    return value as T;
  }
}

export class DoubleRouteMap<T> extends Map<string, Map<string, T>> {
  public constructor(initializer?: [string, [string, T][]][]) {
    initializer
      ? super(initializer.map(route => [route[0], new Map(route[1])]))
      : super();
  }

  public deepGet(key1: string, key2: string): T {
    assert(this.has(key1), '"key1" does not exist in this map', 'DoubleRouteMap');

    const route = super.get(key1) as Map<string, T>;

    assert(route.has(key2), '"key2" does not exist in this map', 'DoubleRouteMap');

    return route.get(key2) as T;
  }
}
