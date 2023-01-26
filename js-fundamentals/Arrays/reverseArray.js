function reverseArray(num, input) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        const element = input[i];
        arr.push(element);
    }

    let output = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        output += `${element} `;
    }

    console.log(output.trim());
}

reverseArray(3, [10, 20, 30, 40, 50]);
