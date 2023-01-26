function reverseArray(num, input) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        const element = input[i];
        arr.push(element);
    }

    const reversedArray = arr.reverse();
    console.log(reversedArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
