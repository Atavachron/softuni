function solve(input) {
    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'ACTION') {
        let actor = command;

        let actorMoney = 0;

        if (actor.length > 15) {
            actorMoney = budget * 0.2;
        } else {
            command = input[index];
            index++;
            actorMoney = Number(command);
        }

        budget -= actorMoney;

        if (budget <= 0) {
            break;
        }

        command = input[index];
        index++;
    }

    if (budget > 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(
            `We need ${Math.abs(budget).toFixed(2)} leva for our actors.`
        );
    }
}

solve([
    '90000',
    'Christian Bale',
    '70000.50',
    'Leonard DiCaprio',
    'Kevin Spacey',
    '24000.99',
]);

solve([
    '170000',
    'Ben Affleck',
    '40000.50',
    'Zahari Baharov',
    '80000',
    'Tom Hanks',
    '2000.99',
    'ACTION',
]);
