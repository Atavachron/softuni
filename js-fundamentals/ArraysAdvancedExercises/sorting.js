function sortArr(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let arrangedArr = [];

    while (sortedArr.length > 0) {
        arrangedArr.push(sortedArr.shift());
        arrangedArr.push(sortedArr.pop());
    }

    console.log(arrangedArr.join(' '));
}

sortArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortArr([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
