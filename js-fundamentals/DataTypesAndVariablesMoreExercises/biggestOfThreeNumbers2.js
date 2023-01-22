function findBiggestNumber(a, b, c) {
    let biggestNumber;
    if (a > b && a > c) {
        biggestNumber = a;
    } else if (b > a && b > c) {
        biggestNumber = b;
    } else {
        biggestNumber = c;
    }

    console.log(biggestNumber);
}

findBiggestNumber(5, 3, 10);
