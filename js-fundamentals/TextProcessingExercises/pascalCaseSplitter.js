function splitPascalCase(input) {
    let result = [];
    result.push(input[0]);

    let index = 1;
    let end = input.length;

    while (index < end) {
        if (
            input[index].charCodeAt(0) >= 65 &&
            input[index].charCodeAt(0) <= 90
        ) {
            result.push('');
        }

        result[result.length - 1] += input[index];

        index++;
    }

    console.log(result.join(', '));
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
