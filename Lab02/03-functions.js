'use strict'

const average = (firstNum, secondNum) => {
    return ((firstNum + secondNum) / 2);
}

const square = (num) => {
    return num * num;
}

const cube = (num) => {
    return num * num * num;
}

const calculate = (start, end) => {
    if (end < start) { return []; }
    const results = [];

    for (let i = start; i <= end; i++) {
        let curResult = average(cube(i), square(i))
        results.push(curResult);
    }
    
   return results;
}

console.log(`Average of 4 and 8 is ${average(4, 8)}\n`);
console.log(`Square of 5 is ${square(5)}\n`);
console.log(`Cube of 3 is ${cube(3)}\n`);
console.log(`Calculate from 0 to 9: \n ${calculate(0, 9)}\n`);