// Write a function that takes three number arguments as input and finds the largest of them. Print the following text
// on the console: `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function solve() {
    let largestNum = -Infinity;

    for (let arg of arguments) {
        if (arg > largestNum) {
            largestNum = arg;
        }
    }

    return `The largest number is ${largestNum}.`;
}

console.log(solve(5, -3, 16));
console.log(solve(-3, -5, -22.5));
