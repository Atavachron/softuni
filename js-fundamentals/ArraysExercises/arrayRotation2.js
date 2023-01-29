function rotateArray(arr, count) {
    let buffArray = [];
    for (let i = 0; i < count; i++) {
        let currentEl = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArray.push(arr[j]);
        }
        buffArray.push(currentEl);

        arr = buffArray;
        buffArray = [];
    }
    console.log(arr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
