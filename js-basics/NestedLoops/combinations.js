//Find all possible combinations of whole numbeers that make the equation x1 + x2 + x3 = num true.

function findCombinations(input) {
    let num = Number(input[0]);
    let result = 0;

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                if (i + j + k === num) {
                    result++;
                }
            }
        }
    }

    console.log(result);
}

findCombinations(['25']);
