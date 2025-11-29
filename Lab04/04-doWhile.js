'use strict';

const sum = (...args) => {
    let total = 0; 
    let i = 0;
    do { total += args[i];
        i++; } 
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
};

console.log(sum(10, 20, 30, 40));
console.log(sum(-10, -20, -30, -40));