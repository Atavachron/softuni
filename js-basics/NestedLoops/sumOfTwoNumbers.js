//Find the first possible combination of a sum of two whole numbers within a range
//that equals a given number

function findFirstCombination(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCount = 0;
    let combinationFound = false;

    for (let i = start; i <= end; i++) {
        for (j = start; j <= end; j++) {
            combinationCount++;
            if (i + j === magicNumber) {
                combinationFound = true;
                console.log(
                    `Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`
                );
                break;
            }
        }

        if (combinationFound) {
            break;
        }
    }

    if (!combinationFound) {
        console.log(
            `${combinationCount} combinations - neither equals ${magicNumber}`
        );
    }
}

findFirstCombination(['1', '10', '5']);
findFirstCombination(['88', '888', '1000']);
findFirstCombination(['23', '24', '20']);
findFirstCombination(['88', '888', '2000']);
