import {
  assert,
  isString
} from './index';

const messenger = 'AttributesMap';

export class AttributesMap extends Map<string, any> {
  public constructor(iterable?: Iterable<readonly [string, any]>) {
    iterable ? super(iterable) : super();
  }

  public get(attribute: string): any {
    assert(
      this.has(attribute),
      '"attribute" does not exist in this map',
      messenger
    );

    return super.get(attribute);
  }

  public set(attribute: string, value: any) {
    assert(
      isString(attribute),
      '"attribute" must be of type string',
      messenger
    );

    super.set(attribute, value);

    return this;
  }
}
