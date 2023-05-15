// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function solve(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);

    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
}

solve('1', '5');
solve('-8', '20');
