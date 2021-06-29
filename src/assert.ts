export function assert(assertion: boolean, message: string | (() => string), messenger?: string): assertion is true {
  messenger = messenger ? `${messenger}: ` : '';

  if (!assertion) {
    throw new Error(`${messenger}${typeof message === 'string' ? message : message()}`);
  }

  return true;
}

export function assertStaticClass(messenger?: string) {
  assert(
    false,
    'This is a static class and should not be instantiated',
    messenger
  );
}
