'use strict'

const incNumber = (num) => {
  return ++num;
}

let number = 5;
let incrementedNumber = incNumber(number);

console.log(`Original number: ${number} \nIncremented number: ${incrementedNumber}\n`);
console.log(`Original number is 7 \nIncremented number: ${incNumber(7)}\n`);

const incField = (obj, fieldName) => {
    ++obj[fieldName];
    return obj;
}

let obj = {num: 6, str: 'Hello', bool: true};

console.log(`Original object: ${JSON.stringify(obj)} \nIncremented object: ${JSON.stringify(incField(obj, 'num'))}\n`);
