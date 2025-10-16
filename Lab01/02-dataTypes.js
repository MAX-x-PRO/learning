'use strict'

const countDataTypes = (dataArray) => {
    const dataTypes = {};

    for (const currentData of dataArray) {
        dataTypes[typeof(currentData)] = (dataTypes[typeof(currentData)] || 0) + 1;
    }

    return dataTypes;
}

const data = [true, 'hello', 5, 12, -200, false, false, 'word', 0, 3.14, 42, -7, 
    'JavaScript', true, null, undefined, NaN, {}, [], function() {}, Symbol('sym'), 
    BigInt(9007199254741991), new Date(), new Map(), new Set()];

console.log(`Count of types in this data: \n ${JSON.stringify(countDataTypes(data))}\n`);

