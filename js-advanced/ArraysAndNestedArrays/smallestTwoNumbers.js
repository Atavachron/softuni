// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let smallestNumsArr = sortedArr.slice(0, 2);
    console.log(smallestNumsArr.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
