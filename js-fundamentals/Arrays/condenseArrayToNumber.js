function condenseArrayToNumber(input) {
    let arr = input;

    while (arr.length > 1) {
        let newArray = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let firstElement = arr[i];
            let secondElement = arr[i + 1];

            newArray.push(firstElement + secondElement);
        }

        arr = newArray;
    }

    console.log(arr[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
