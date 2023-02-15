function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let isAlive = true;

    let commandsArray = input.split('|');

    for (let i = 0; i < commandsArray.length; i++) {
        let currentElement = commandsArray[i].split(' ');
        let command = currentElement[0];
        let points = Number(currentElement[1]);

        if (command === 'potion') {
            let healingPoints = 0;
            if (health + points > 100) {
                healingPoints = 100 - health;
                health = 100;
            } else {
                health += points;
                healingPoints = points;
            }

            console.log(`You healed for ${healingPoints} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);
        } else {
            let monster = command;
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
