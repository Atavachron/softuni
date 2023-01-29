//A top integer is an integer which is bigger than all the elements to its right

function findTopIntegers(arr) {
    let newArr = [];
    let topInteger = Number.MIN_SAFE_INTEGER;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > topInteger) {
            newArr.push(arr[i]);
            topInteger = arr[i];
        }
    }

    console.log(newArr.reverse().join(' '));
}

findTopIntegers([1, 4, 3, 2]);
findTopIntegers([14, 24, 3, 19, 15, 17]);
findTopIntegers([41, 41, 34, 20]);
