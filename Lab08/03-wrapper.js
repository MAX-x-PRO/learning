'use strict';

const contract = (fn, ...types) => (...args) => {
  const expectedArgsCount = types.length - 1; 

  if (args.length !== expectedArgsCount) {
    throw new TypeError(`Expected ${expectedArgsCount} arguments, got ${args.length}`);
  }

  for (let i = 0; i < expectedArgsCount; i++) {
    const curArg = args[i];
    const curDef = types[i];
    const name = curDef.name.toLowerCase();
    if (typeof curArg !== name) {
      throw new TypeError(`Argument ${i + 1} type ${name} expected`);
    }
  }

  const result = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof result !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }

  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);