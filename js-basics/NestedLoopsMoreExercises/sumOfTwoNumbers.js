function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationNumber = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationNumber++;
            if (i + j === magicNumber) {
                console.log(
                    `Combination N:${combinationNumber} (${i} + ${j} = ${magicNumber})`
                );
                isFound = true;
                break;
            }
        }
        if (isFound) break;
    }
    if (!isFound) {
        console.log(
            `${combinationNumber} combinations - neither equals ${magicNumber}`
        );
    }
}

solve(['1', '10', '5']);
solve(['23', '24', '20']);
solve(['88', '888', '1000']);
solve(['88', '888', '2000']);
