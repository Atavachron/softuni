function subtractEvenFromOddSum(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (const element of input) {
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

subtractEvenFromOddSum([1, 2, 3, 4, 5, 6]);
subtractEvenFromOddSum([3, 5, 7, 9]);
subtractEvenFromOddSum([2, 4, 6, 8, 10]);
