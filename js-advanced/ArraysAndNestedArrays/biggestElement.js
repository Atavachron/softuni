// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

function solve(matrix) {
    let biggestElement = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }

    return biggestElement;
}

solve([
    [20, 50, 10],
    [8, 33, 145],
]);

solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
]);
