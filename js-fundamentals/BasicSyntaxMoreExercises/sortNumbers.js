function sortNumber(a, b, c) {
    let arr = [a, b, c];

    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

sortNumber(2, 1, 3);
sortNumber(-2, 1, 3);
