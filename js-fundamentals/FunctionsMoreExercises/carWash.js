function washCar(commands) {
    let value = 0;

    for (let command of commands) {
        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.2;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.9;
                break;
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`;
}

console.log(
    washCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
);
console.log(
    washCar(['soap', 'water', 'mud', 'mud', 'water', 'mud', 'vacuum cleaner'])
);
