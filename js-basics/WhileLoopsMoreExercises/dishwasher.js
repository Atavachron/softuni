function calculateLiters(input) {
    let bottleCount = Number(input[0]);
    let availableLiquid = bottleCount * 750;

    let index = 1;
    let command = input[index];

    let dishesWashed = 0;
    let potsWashed = 0;

    while (availableLiquid >= 0) {
        if (command === 'End') {
            break;
        }

        let itemCount = Number(command);

        if (index % 3 === 0) {
            availableLiquid -= itemCount * 15;
            potsWashed += itemCount;
        } else {
            availableLiquid -= itemCount * 5;
            dishesWashed += itemCount;
        }

        index++;
        command = input[index];
    }

    if (availableLiquid >= 0) {
        console.log('Detergent was enough!');
        console.log(
            `${dishesWashed} dishes and ${potsWashed} pots were washed.`
        );
        console.log(`Leftover detergent ${availableLiquid} ml.`);
    } else {
        console.log(
            `Not enough detergent, ${Math.abs(
                availableLiquid
            )} ml. more necessary!`
        );
    }
}

calculateLiters(['2', '53', '65', '55', 'End']);
calculateLiters(['1', '10', '15', '10', '12', '13', '30']);
