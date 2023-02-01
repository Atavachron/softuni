function printNthStep(arr) {
    let step = Number(arr[arr.length - 1]);
    let collection = [];

    for (let i = 0; i < arr.length - 1; i += step) {
        collection.push(arr[i]);
    }

    console.log(collection.join(' '));
}

printNthStep(['5', '20', '31', '4', '20', '2']);
printNthStep(['dsa', 'asd', 'test', 'test', '2']);
printNthStep(['1', '2', '3', '4', '5', '6']);
