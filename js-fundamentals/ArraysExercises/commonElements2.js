function printCommonElements(arr1, arr2) {
    for (const i of arr1) {
        for (const j of arr2) {
            if (i === j) {
                console.log(i);
            }
        }
    }
}

printCommonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

printCommonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);
