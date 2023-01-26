function condenseArrayToNumber(input) {
    let currentArray = input;

    while (currentArray.length > 1) {
        let newArray = [];

        for (let i = 0; i < currentArray.length - 1; i++) {
            let firstElement = currentArray[i];
            let secondElement = currentArray[i + 1];

            newArray.push(firstElement + secondElement);
        }

        currentArray = newArray;
    }

    console.log(currentArray[0]);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
