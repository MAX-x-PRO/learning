'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
};

const example = [1, 2, 3, 4, 5, 6, 7];
removeElement(example, 5);
console.log(example); 