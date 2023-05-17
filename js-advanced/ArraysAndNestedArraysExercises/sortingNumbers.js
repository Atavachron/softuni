// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the
// biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.
// Return the resulting array.

function solve(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let output = [];

    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
        if (endIndex === startIndex) {
            output.push(sortedArray[startIndex]);
        } else {
            output.push(sortedArray[startIndex]);
            output.push(sortedArray[endIndex]);
        }

        startIndex++;
        endIndex--;
    }

    return output;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
