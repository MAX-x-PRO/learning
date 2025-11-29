'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
}

const example = [1, 2, 3, 4, 5, 6, 7, 5, 3];
removeElements(example, 3, 5);
console.log(example)