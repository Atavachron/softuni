function solve(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let pct = Number(input[2]);

    let totalArea = height * width * 4;
    totalArea = Math.ceil(totalArea - (totalArea * pct) / 100);

    let index = 3;
    let command = input[index];
    index++;

    while (command !== 'Tired!') {
        totalArea -= Number(command);

        if (totalArea <= 0) {
            if (totalArea === 0) {
                console.log(`All walls are painted! Great job, Pesho!`);
            } else {
                console.log(
                    `All walls are painted and you have ${Math.abs(
                        totalArea
                    )} l paint left!`
                );
            }
            break;
        }

        command = input[index];
        index++;
    }

    if (totalArea > 0) {
        console.log(`${totalArea} quadratic m left.`);
    }
}

solve(['3', '5', '10', '2', '3', '4', 'Tired!']);
solve(['2', '3', '25', '6', '7', '8']);
