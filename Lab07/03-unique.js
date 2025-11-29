'use strict';

const unique = (array) => {
  const result = [];

  for (const curItem of array) {
    if (!result.includes(curItem)) {
      result.push(curItem);
    }
  }

  return result;
};

const example = [1, 2, 3, 4, 5, 3, 2, 1, 6, 7, 8, 6];
console.log(unique(example));
