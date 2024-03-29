// Write a program that performs different operations on an array of elements. Implement the following operations:
//  Sum(ai) - calculates the sum of all elements from the input array
//  Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
//  Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function solve(input) {
    let sum = input.reduce((acc, cur) => acc + cur, 0);
    let sumInverse = input.reduce((acc, cur) => acc + 1 / cur, 0);
    let concat = '';
    input.map(String).forEach(str => (concat += str));

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
