function sortArr(arr) {
    let sortedArr = arr.sort((a, b) => b - a);

    let result = [];

    for (let i = 0; i < sortedArr.length / 2; i++) {
        result.push(sortedArr[i], sortedArr[sortedArr.length - 1 - i]);
    }

    //Remove the last element, which will be doubled in case of array length which is odd number
    if (sortedArr.length % 2 === 1) {
        result.pop();
    }
    console.log(result.join(' '));
}

sortArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortArr([34, 2, 32, 45, 6, 32, 7, 19, 47]);
