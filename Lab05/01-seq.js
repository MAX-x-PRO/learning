'use strict'

const seq = (...funcs) => {
  const chain = (func) => {
    if (typeof func === 'number') {
      return funcs.reduceRight((acc, f) => f(acc), func);
    }
    return seq(...funcs, func);
  };
  return chain;
};

const example = seq
    (x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7);

console.log(example);