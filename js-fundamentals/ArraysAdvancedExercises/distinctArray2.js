function removeRepeatingElements(arr) {
    let newArr = Array.from(new Set(arr));
    console.log(newArr.join(' '));
}

removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5]);
