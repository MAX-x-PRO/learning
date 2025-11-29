'use strict'

const pipe = (...funcs) => {
  for (const func of funcs) {
    if (typeof func !== 'function') {
      throw new TypeError('All arguments to pipe must be functions');
    }
  }

  return (x) => {
    let result = x;
    for (const func of funcs) {
      result = func(result);
    }
    return result;
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const example = pipe(inc, twice, cube);
console.log(example(3));