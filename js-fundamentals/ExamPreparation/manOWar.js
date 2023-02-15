function fightBattle(input) {
    let pirateShipStatus = input[0];
    let warshipStatus = input[1];
    let maxHealth = Number(input[2]);

    let pirateShipSections = pirateShipStatus.split('>');
    let warshipSections = warshipStatus.split('>');

    pirateShipSections = pirateShipSections.map(Number);
    warshipSections = warshipSections.map(Number);

    let index = 3;
    let token = input[index];
    index++;

    while (token !== 'Retire') {
        let tokenArr = token.split(' ');
        let command = tokenArr[0];

        if (command === 'Fire') {
            let i = Number(tokenArr[1]);
            let damage = Number(tokenArr[2]);

            if (warshipSections[i] !== undefined) {
                warshipSections[i] -= damage;
                if (warshipSections[i] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            } else {
                token = input[index];
                index++;
                continue;
            }
        } else if (command === 'Defend') {
            let startIndex = Number(tokenArr[1]);
            let endIndex = Number(tokenArr[2]);
            let damage = Number(tokenArr[3]);

            if (
                pirateShipSections[startIndex] !== undefined &&
                pirateShipSections[endIndex] !== undefined
            ) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShipSections[i] -= damage;
                    if (pirateShipSections[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            } else {
                token = input[index];
                index++;
                continue;
            }
        } else if (command === 'Repair') {
            let i = Number(tokenArr[1]);
            let health = Number(tokenArr[2]);

            if (pirateShipSections[i] !== undefined) {
                pirateShipSections[i] += health;
                if (pirateShipSections[i] > maxHealth) {
                    pirateShipSections[i] = maxHealth;
                }
            } else {
                token = input[index];
                index++;
                continue;
            }
        } else {
            let filteredSections = pirateShipSections.filter(
                section => section < (maxHealth * 20) / 100
            );
            console.log(`${filteredSections.length} sections need repair.`);
        }

        token = input[index];
        index++;
    }

    let pirateShipFinal = pirateShipSections.reduce((a, b) => a + b);
    let warshipFinal = warshipSections.reduce((a, b) => a + b);

    console.log(`Pirate ship status: ${pirateShipFinal}`);
    console.log(`Warship status: ${warshipFinal}`);
}

fightBattle([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire',
]);
