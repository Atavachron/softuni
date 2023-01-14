function calculateTotalPrice(peopleCount, groupType, dayOfWeek) {
    let pricePerPerson = 0;

    switch (dayOfWeek) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 8.45;
                    break;
                case 'Business':
                    pricePerPerson = 10.9;
                    break;
                case 'Regular':
                    pricePerPerson = 15;
                    break;
            }
            break;
        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 9.8;
                    break;
                case 'Business':
                    pricePerPerson = 15.6;
                    break;
                case 'Regular':
                    pricePerPerson = 20;
                    break;
            }
            break;
        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 10.46;
                    break;
                case 'Business':
                    pricePerPerson = 16;
                    break;
                case 'Regular':
                    pricePerPerson = 22.5;
                    break;
            }
            break;
    }

    let totalPrice = pricePerPerson * peopleCount;

    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && peopleCount >= 100) {
        totalPrice = totalPrice - pricePerPerson * 10;
    } else if (
        groupType === 'Regular' &&
        peopleCount >= 10 &&
        peopleCount <= 20
    ) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTotalPrice(30, 'Students', 'Sunday');
calculateTotalPrice(40, 'Regular', 'Saturday');
