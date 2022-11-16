function giveOscar(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);

    let totalPoints = academyPoints;

    for (let i = 3; i < input.length; i += 2) {
        let judgeNameLength = input[i].length;
        let judgePoints = Number(input[i + 1]);
        let pointsAwarded = (judgeNameLength * judgePoints) / 2;
        totalPoints += pointsAwarded;

        if (totalPoints > 1250.5) {
            break;
        }
    }

    if (totalPoints > 1250.5) {
        console.log(
            `Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(
                1
            )}!`
        );
    } else {
        console.log(
            `Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
        );
    }
}

giveOscar([
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

giveOscar([
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
