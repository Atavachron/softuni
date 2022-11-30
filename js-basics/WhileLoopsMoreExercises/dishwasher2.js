function calculateLiters(input) {
    let bottles = Number(input[0]);
    let detergent = bottles * 750;

    let index = 1;
    let command = input[index];

    let pots = 0;
    let dishes = 0;

    while (command !== 'End') {
        let items = Number(command);

        if (index % 3 === 0) {
            detergent -= items * 15;
            pots += items;
        } else {
            detergent -= items * 5;
            dishes += items;
        }

        index++;
        command = input[index];

        if (!command) break;
    }

    if (detergent >= 0) {
        console.log('Detergent was enough!');
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else {
        console.log(
            `Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`
        );
    }
}
