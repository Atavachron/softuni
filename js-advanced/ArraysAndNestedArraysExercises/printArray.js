// The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the
// given delimiter.

function solve(arr, delimiter) {
    let output = arr.join(delimiter);
    console.log(output);
}

solve(['One', 'Two', 'Three', 'Four', 'Five'], '-');
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
