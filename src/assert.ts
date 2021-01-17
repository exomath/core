export function assert(assertion: boolean, message: string | (() => string), messenger?: string) {
  messenger = messenger ? messenger + ': ' : '';

  if (!assertion) {
    throw new Error(`${messenger}${typeof message === 'string' ? message : message()}`);
  }
}