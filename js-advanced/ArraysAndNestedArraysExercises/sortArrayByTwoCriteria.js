// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, and by
// alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line

function solve(arr) {
    let sortedArr = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b, 'en', { sensitivity: 'base' });

        return firstCriteria || secondCriteria; //If first criteria is met, it will be returned
    });

    console.log(sortedArr.join('\n'));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);
