// Write a function that calculates and returns the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is the return value of your function and should be a number.

function solve(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr.slice(-1)[0]);

    return num1 + num2;
}

solve(['20', '30', '40']);
