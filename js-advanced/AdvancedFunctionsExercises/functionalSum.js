function add(number) {
    let sum = number;

    const addNext = function (nextNumber) {
        sum += nextNumber;
        return addNext;
    };

    addNext.toString = function () {
        return sum;
    };

    return addNext;
}
