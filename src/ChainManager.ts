import { assert } from './index';

export interface IChainLink<T> {
  prev: T | null;
  next: T | null;
}

const TYPE = 'ChainManager';

export abstract class ChainManager<T extends IChainLink<T>> {
  private registry: Set<T> = new Set();
  public first: T | null = null;
  public last: T | null = null;

  protected constructor() {}

  public forEach(callback: (item: T) => void) {
    if (this.count > 0) {
      let item: T = this.first as T;

      if (this.first === this.last) {
        callback(item);
      } else {
        do {
          callback(item);

          item = item.next as T;
        } while (item !== this.last);
      }
    }
  }

  public insert(value: T, prevValue: T | null = null) {
    assert(
      !this.has(value),
      '"value" is already managed by this chain',
      TYPE + '.insert'
    );
    
    if (this.count === 0) {
      assert(
        prevValue === null,
        '"value" is the first, so "prevValue" should be null or omitted',
        TYPE + '.insert'
      );

      this.first = value;
      this.last = value;
    } else {
      if (prevValue === null) { // value is the new first
        value.next = this.first as T;
        value.prev = value.next.prev; // to preserve any existing upwards link beyond the first	

        if (value.prev !== null) {	
          value.prev.next = value; // to preserve any existing downwards link from beyond the first	
        }

        value.next.prev = value;

        this.first = value;
      } else {
        assert(
          this.has(prevValue),
          '"value" is not the first, so "prevValue" should already be managed by this chain',
          TYPE + '.insert'
        );

        value.prev = prevValue;

        if (value.prev === this.last) { // value is the new last
          if (value.prev.next !== null) {	
            value.next = value.prev.next; // to preserve any existing downwards link beyond the last	
            value.next.prev = value; // to preserve any existing upwards link from beyond the last	
          }
          
          value.prev.next = value;
          
          this.last = value;
        } else {
          value.next = value.prev.next as T;
          value.next.prev = value;
          value.prev.next = value;
        }
      }
    }

    this.registry.add(value);
  }

  public get count() {
    return this.registry.size;
  }

  public remove(value: T) {
    assert(
      this.has(value),
      '"value" is not managed by this chain',
      TYPE + '.remove'
    );

    if (this.count === 1) { // value is first and last
      if (value.prev !== null) {
        value.prev.next = value.next; // to preserve any existing downwards from beyond the first
      }

      if (value.next !== null) {
        value.next.prev = value.prev; // to preserve any existing upwards link from beyond the last
      }

      this.first = null;
      this.last = null;
    } else {
      if (value === this.first) {
        if (value.prev !== null) {
          value.prev.next = value.next; // to preserve any existing downwards from beyond the first
        }

        (value.next as T).prev = value.prev; // to preserve any existing upwards link beyond the first

        this.first = value.next;
      } else if (value === this.last) {
        if (value.next !== null) {
          value.next.prev = value.prev; // to preserve any existing upwards link from beyond the last
        }

        (value.prev as T).next = value.next; // to preserve any existing downwards link beyond the last

        this.last = value.prev;
      } else {
        (value.prev as T).next = value.next;
        (value.next as T).prev = value.prev;
      }
    }

    value.prev = null;
    value.next = null;

    this.registry.delete(value);
  }

  public has(value: T) {
    return this.registry.has(value);
  }
}
