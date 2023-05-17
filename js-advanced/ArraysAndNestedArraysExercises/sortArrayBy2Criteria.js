// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by
// alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line

function solve(arr) {
    let sortedArr = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    console.log(sortedArr.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);
