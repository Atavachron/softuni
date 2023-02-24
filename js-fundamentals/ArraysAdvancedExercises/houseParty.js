function houseParty(input) {
    let goingArr = [];

    for (let el of input) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let statement = tokens.slice(1).join(' ');

        switch (statement) {
            case 'is going!':
                if (goingArr.includes(name)) {
                    console.log(`${name} is already in the list!`);
                } else {
                    goingArr.push(name);
                }
                break;
            case 'is not going!':
                if (goingArr.includes(name)) {
                    goingArr = goingArr.filter(el => el !== name);
                } else {
                    console.log(`${name} is not in the list!`);
                }
                break;
        }
    }
    console.log(goingArr.join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!',
]);

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!',
]);
