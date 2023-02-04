function checkArrayIndex(array, index) {
    //Check if the index is an integer (whole number) and check that it is more than 0 and less than the last index
    if (Number.isInteger(index) && index >= 0 && index < array.length) {
        return true;
    }
    return false;
}

console.log(checkArrayIndex([1, 2, 3], 2));
