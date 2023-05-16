// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space

function solve(arr) {
    let output = arr
        .filter((el, i) => {
            return i % 2 !== 0;
        })
        .map(el => el * 2)
        .reverse();

    console.log(output);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
