function spaceTravel(input) {
    let route = input[0];
    let fuel = Number(input[1]);
    let ammunition = Number(input[2]);

    let routeArr = route.split('||');
    let isMissionFailed = false;

    for (let element of routeArr) {
        let tokens = element.split(' ');
        let command = tokens[0];
        let points = Number(tokens[1]);

        switch (command) {
            case 'Travel':
                travel(points);
                break;
            case 'Enemy':
                fightEnemy(points);
                break;
            case 'Repair':
                repair(points);
                break;
            case 'Titan':
                console.log('You have reached Titan, all passengers are safe.');
                return;
        }

        if (isMissionFailed) return;
    }

    function travel(lightYears) {
        if (fuel >= lightYears) {
            console.log(`The spaceship travelled ${lightYears} light-years.`);
            fuel -= lightYears;
        } else {
            console.log('Mission failed.');
            isMissionFailed = true;
        }
    }

    function fightEnemy(enemyArmour) {
        if (ammunition >= enemyArmour) {
            ammunition -= enemyArmour;
            console.log(`An enemy with ${enemyArmour} armour is defeated.`);
        } else {
            if (fuel >= enemyArmour * 2) {
                console.log(
                    `An enemy with ${enemyArmour} armour is outmaneuvered.`
                );
                fuel -= enemyArmour * 2;
            } else {
                console.log('Mission failed.');
                isMissionFailed = true;
            }
        }
    }

    function repair(addedFuel) {
        fuel += addedFuel;
        ammunition += addedFuel * 2;
        console.log(`Ammunitions added: ${addedFuel * 2}.`);
        console.log(`Fuel added: ${addedFuel}.`);
    }
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
spaceTravel([
    'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100',
]);
