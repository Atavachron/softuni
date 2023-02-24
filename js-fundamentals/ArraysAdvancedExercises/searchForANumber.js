function searchNumber(arr1, arr2) {
    //Use destructuring to get the elements of arr2
    let [elementsCount, elementsToDelete, numberToFind] = arr2;

    //Take the first n elements of the array
    let newArr = arr1.slice(0, elementsCount);

    //Delete the required number of elements starting from index 0
    newArr.splice(0, elementsToDelete);

    let counter = 0;

    //Increment counter if the element matches the number to find
    newArr.forEach(el => {
        if (el === numberToFind) {
            counter++;
        }
    });

    console.log(`Number ${numberToFind} occurs ${counter} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
