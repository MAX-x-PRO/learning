'use strict'

const compose = (...funcs) => {
  const func = (x) => {
    let result = x;
    for (let i = funcs.length - 1; i >= 0; i--) {
      try {
        result = funcs[i](result);
      } catch (e) {
        func._errorHandlers.forEach(handler => handler(e));
        return undefined;
      }
    }
    return result;
  };
  func._errorHandlers = [];
  func.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      func._errorHandlers.push(handler);
    }
    return func;
  };

  return func;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const example = compose(inc, twice, cube);
console.log(example(3));