// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the
// names, each on a new line.

function solve(arr) {
    let output = arr
        .sort((a, b) => a.localeCompare(b))
        .map((el, i) => `${i + 1}.${el}`)
        .join('\n');

    console.log(output);
}

solve(['John', 'Bob', 'Christina', 'Ema']);
