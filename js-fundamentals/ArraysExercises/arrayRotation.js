function rotateArray(arr, count) {
    for (let i = 0; i < count; i++) {
        let el = arr.shift();
        arr.push(el);
    }

    console.log(arr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
