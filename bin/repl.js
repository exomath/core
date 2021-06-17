import repl from 'repl';
import * as lib from '../lib';

const server = repl.start();

Object.assign(server.context, lib);

Object.defineProperty(server.context, 'exit', {
  enumerable: true,
  get: () => process.exit(0)
});

Object.defineProperty(server.context, 'quit', {
  enumerable: true,
  get: () => process.exit(0)
});
