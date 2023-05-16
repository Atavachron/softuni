// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function solve(arr) {
    let output = '';
    arr.forEach((el, i) => {
        if (i % 2 === 0) {
            output += el + ' ';
        }
    });

    console.log(output.trim());
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);
