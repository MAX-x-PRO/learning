'use strict';

const difference = (array, secArray) => {
  const result = [];

  for (const item of array) {
    if (!secArray.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

const exampleA = [1, 2, 3, 4, 5, 6, 7];
const exampleB = [5, 6, 7, 8, 9, 10];
console.log(difference(exampleA, exampleB));