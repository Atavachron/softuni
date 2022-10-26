//Calculate bonus points based on a set of conditions

function calculateBonusPoints(input) {
    let points = Number(input[0]);
    let bonus = 0;

    if (points <= 100) {
        bonus = 5;
    } else if (points <= 1000) {
        bonus = points * 0.2;
    } else {
        bonus = points * 0.1;
    }

    if (points % 2 === 0) {
        bonus++;
    } else if (points % 10 === 5) {
        bonus += 2;
    }

    let total = points + bonus;

    console.log(bonus);
    console.log(total);
}

calculateBonusPoints(['20']);
calculateBonusPoints(['175']);
calculateBonusPoints(['2703']);
calculateBonusPoints(['15875']);
