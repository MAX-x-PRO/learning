'use strict';

const sum = (...args) => {
    args.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 22, 12, 67)); 
console.log(sum(-1, -21, 13, 123)); 