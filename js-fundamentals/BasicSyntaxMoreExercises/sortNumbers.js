function sortNumber(a, b, c) {
    let arr = [a, b, c];

    arr.sort();

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

sortNumber(2, 1, 3);
sortNumber(-2, 1, 3);
