// Write a function that takes two positive numbers as input and compute the greatest common divisor.
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function solve(num1, num2) {
    for (let i = num2; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            break;
        }
    }
}

solve(15, 5);
solve(2154, 458);
