'use strict'

const range = (start, end) => {
    if(end < start) { return []; }
    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}
console.log(`Range from 15 to 30: \n ${range(15, 30)}\n`);

let anotherRange = range(5, 10);
console.log(`Range from 5 to 10: \n ${anotherRange}\n`);

const oddRange = (start, end) => {
    if(end < start) { return []; }
    const result = [];

    for (let i = start; i <= end; i++) {
        if (i%2 === 1) { result.push(i); }
    }
    
    return result;
}

console.log(`Odd range from 15 to 30: \n ${oddRange(15, 30)}\n`);
let anotherOddRange = oddRange(5, 10);
console.log(`Odd range from 5 to 10: \n ${anotherOddRange}\n`);