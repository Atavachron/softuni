function addAndSubtract(arr) {
    let newArr = [];
    let initialSum = 0;
    let finalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        initialSum += element;

        if (element % 2 === 0) {
            element += i;
        } else {
            element -= i;
        }

        newArr.push(element);
        finalSum += element;
    }

    console.log(newArr);
    console.log(initialSum);
    console.log(finalSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
