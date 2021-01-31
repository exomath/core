export function assert(assertion: boolean, message: string | (() => string), messenger?: string): assertion is true {
  messenger = messenger ? messenger + ': ' : '';

  if (!assertion) {
    throw new Error(`${messenger}${typeof message === 'string' ? message : message()}`);
  }

  return true;
}
