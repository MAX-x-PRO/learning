'use strict'

const array = () => {
  const data = [];

  const func = (i) => data[i];
  func.push = (value) => {
    data.push(value);
  };
  func.pop = () => {
    return data.pop();
  };

  return func;
};

const exampleArr = array();

exampleArr.push('first');
exampleArr.push('second');
exampleArr.push('third');

console.log(exampleArr(0));
console.log(exampleArr(1));
console.log(exampleArr(2));

console.log(exampleArr.pop()); 
console.log(exampleArr.pop());
console.log(exampleArr.pop()); 

console.log(exampleArr.pop()); 