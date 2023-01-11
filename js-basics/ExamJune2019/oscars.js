function solve(input) {
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let jury = Number(input[2]);

    let total = academyPoints;
    let isEnough = false;

    for (let i = 3; i < jury * 2 + 3; i += 2) {
        let name = input[i];
        let points = Number(input[i + 1]);

        total += (name.length * points) / 2;

        if (total > 1250.5) {
            isEnough = true;
            break;
        }
    }

    if (isEnough) {
        console.log(
            `Congratulations, ${actor} got a nominee for leading role with ${total.toFixed(
                1
            )}!`
        );
    } else {
        console.log(
            `Sorry, ${actor} you need ${(1250.5 - total).toFixed(1)} more!`
        );
    }
}

solve([
    'Zahari Baharov',
    '205',
    '4',
    'Johnny Depp',
    '45',
    'Will Smith',
    '29',
    'Jet Lee',
    '10',
    'Matthew Mcconaughey',
    '39',
]);

solve([
    'Sandra Bullock',
    '340',
    '5',
    'Robert De Niro',
    '50',
    'Julia Roberts',
    '40.5',
    'Daniel Day-Lewis',
    '39.4',
    'Nicolas Cage',
    '29.9',
    'Stoyanka Mutafova',
    '33',
]);
