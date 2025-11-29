'use strict';

const sum = (...args) => {
    let total = 0; 
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
};

console.log(sum(21, 2, 43, 45));
console.log(sum(1, 0, -42, 45));