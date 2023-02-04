function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, (j = arr.length - 1 - i));
    }

    return arr.join(' ');

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

console.log(reverseArray(['a', 'b', 'c', 'd']));
