function calculateFlowerExpenses(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;

    switch (flowerType) {
        case 'Roses':
            flowerPrice = 5;
            break;
        case 'Dahlias':
            flowerPrice = 3.8;
            break;
        case 'Tulips':
            flowerPrice = 2.8;
            break;
        case 'Narcissus':
            flowerPrice = 3;
            break;
        case 'Gladiolus':
            flowerPrice = 2.5;
    }

    let total = flowerPrice * flowerCount;

    if (flowerType === 'Roses' && flowerCount > 80) {
        total *= 0.9;
    } else if (flowerType === 'Dahlias' && flowerCount > 90) {
        total *= 0.85;
    } else if (flowerType === 'Tulips' && flowerCount > 80) {
        total *= 0.85;
    } else if (flowerType === 'Narcissus' && flowerCount < 120) {
        total *= 1.15;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80) {
        total *= 1.2;
    }

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(
            `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(
                2
            )} leva left.`
        );
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

calculateFlowerExpenses(['Roses', '55', '250']);
calculateFlowerExpenses(['Tulips', '88', '260']);
