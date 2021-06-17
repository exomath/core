'use strict';

const repl = require('repl').start();

Object.assign(repl.context, require('esm')(module)('../lib/index'));

Object.defineProperty(repl.context, 'exit', {
  enumerable: true,
  get: () => process.exit(0)
});

Object.defineProperty(repl.context, 'quit', {
  enumerable: true,
  get: () => repl.context.exit
});
