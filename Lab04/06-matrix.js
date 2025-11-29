'use strict';

const max = (matrix) => {
    let maxValue = undefined;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (maxValue === undefined || matrix[i][j] > maxValue) {
                maxValue = matrix[i][j];
            }
        }
    }
    return maxValue;
};

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 9
console.log(max([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]])); // -1