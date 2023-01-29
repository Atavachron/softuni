function playGame(input) {
    let health = 100;
    let coins = 0;
    let isAlive = true;

    let roomsArr = input.toString().split('|');

    for (let i = 0; i < roomsArr.length; i++) {
        let room = roomsArr[i];
        let singleRoomArr = room.split(' ');

        let command = singleRoomArr[0];
        let points = Number(singleRoomArr[1]);

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
            coins += points;
            console.log(`You found ${points} coins.`);
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
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

playGame(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
playGame(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);
