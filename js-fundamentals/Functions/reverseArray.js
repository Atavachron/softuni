function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        //Call the swap function the number of times equal to half the array
        swap(arr, i, (j = arr.length - 1 - i));
    }

    return arr.join(' ');

    //Pass the swap function the array, and the indexes of the elements to be swapped
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

console.log(reverseArray(['a', 'b', 'c', 'd']));
