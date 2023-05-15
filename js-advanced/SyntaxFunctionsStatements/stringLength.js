// Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and
// the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

function solve(...params) {
    let total = 0;

    params.forEach(param => (total += param.length));
    let avg = Math.floor(total / params.length);

    console.log(total);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
