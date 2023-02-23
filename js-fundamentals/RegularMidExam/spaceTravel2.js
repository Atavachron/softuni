function spaceTravel(input) {
    let travelRouteStr = input[0];
    let fuel = Number(input[1]);
    let ammunition = Number(input[2]);

    let travelRoute = travelRouteStr.split('||');

    for (let el of travelRoute) {
        let tokens = el.split(' ');
        let command = tokens[0];
        let points = Number(tokens[1]) || 0;

        if (command === 'Titan') {
            console.log('You have reached Titan, all passengers are safe.');
            return;
        } else if (command === 'Travel') {
            let lightYearsTravelled = points;
            if (fuel >= lightYearsTravelled) {
                console.log(
                    `The spaceship travelled ${lightYearsTravelled} light-years.`
                );
                fuel -= lightYearsTravelled;
            } else {
                console.log('Mission failed.');
                return;
            }
        } else if (command === 'Enemy') {
            let enemyArmour = points;
            if (ammunition >= enemyArmour) {
                ammunition -= enemyArmour;
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);
            } else {
                let fuelConsumed = enemyArmour * 2;
                if (fuel >= fuelConsumed) {
                    console.log(
                        `An enemy with ${enemyArmour} armour is outmaneuvered.`
                    );
                    fuel -= fuelConsumed;
                } else {
                    console.log('Mission failed.');
                    return;
                }
            }
        } else if (command === 'Repair') {
            let fuelAdded = points;
            let ammunitionsAdded = points * 2;

            fuel += fuelAdded;
            ammunition += ammunitionsAdded;

            console.log(`Ammunitions added: ${ammunitionsAdded}.`);
            console.log(`Fuel added: ${fuelAdded}.`);
        }
    }
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);

spaceTravel([
    'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100',
]);
