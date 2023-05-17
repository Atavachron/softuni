// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of
// every row and every column are equal.
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be
// positive.
// The output is a Boolean result indicating whether the matrix is magical or not.

function solve(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0);
        if (rowSum !== sum) {
            return false;
        }
    }

    for (let column = 0; column < matrix[0].length; column++) {
        let columnSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            columnSum += matrix[row][column];
        }

        if (columnSum !== sum) {
            return false;
        }
    }

    return true;
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
