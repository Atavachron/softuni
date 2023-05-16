// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or
//     strings).
//     The input comes as an array of arrays, containing string elements (2D matrix of strings).
//     The output is the return value of your function. Save the number of equal pairs you find and return it.

//Check the right and the bottom neighbour

function solve(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                count++;
            }
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                count++;
            }
        }
    }
    console.log(count);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]);
