function removeRepeatingElements(input) {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        if (!newArray.includes(input[i])) {
            newArray.push(input[i]);
        }
    }

    console.log(newArray.join(' '));
}

removeRepeatingElements([1, 2, 3, 4]);
removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);
removeRepeatingElements([20, 8, 12, 13, 4, 4, 8, 5]);
