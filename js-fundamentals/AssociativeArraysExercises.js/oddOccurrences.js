function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    let result = Array.from(map)
        .filter(el => el[1] % 2 !== 0)
        .map(el => el[0])
        .join(' ');

    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
