// Write a function that takes an integer number as an input and check if all the digits in a given number are the same
// or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function solve(input) {
    let numberAsString = String(input);
    let arr = numberAsString.split('');
    let numbersAreSame = true;
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            numbersAreSame = false;
            break;
        }
    }

    arr.map(Number).forEach(num => (sum += num));

    console.log(numbersAreSame);
    console.log(sum);
}

solve(2222222);
solve(1234);
