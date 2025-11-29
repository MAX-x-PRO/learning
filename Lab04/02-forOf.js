'use strict';

const sum = (...args) => {
    let total = 0;
    for (const num of args) {
        total += num;
    }
    return total;
};

console.log(sum(1, 9, 215, 3));
console.log(sum(-1, -9, -215, -3));
