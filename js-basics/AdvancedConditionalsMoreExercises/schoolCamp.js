function calculateSchoolExpenses(input) {
    let season = input[0];
    let group = input[1];
    let studentCount = Number(input[2]);
    let nights = Number(input[3]);
    let pricePerNight;
    let sports;

    switch (season) {
        case 'Winter':
            switch (group) {
                case 'boys':
                    sports = 'Judo';
                    pricePerNight = 9.6;
                    break;
                case 'girls':
                    sports = 'Gymnastics';
                    pricePerNight = 9.6;
                    break;
                case 'mixed':
                    pricePerNight = 10;
                    sports = 'Ski';
                    break;
            }
            break;
        case 'Spring':
            switch (group) {
                case 'boys':
                    pricePerNight = 7.2;
                    sports = 'Tennis';
                    break;
                case 'girls':
                    pricePerNight = 7.2;
                    sports = 'Athletics';
                    break;
                case 'mixed':
                    pricePerNight = 9.5;
                    sports = 'Cycling';
                    break;
            }
            break;
        case 'Summer':
            switch (group) {
                case 'boys':
                    pricePerNight = 15;
                    sports = 'Football';
                    break;
                case 'girls':
                    pricePerNight = 15;
                    sports = 'Volleyball';
                    break;
                case 'mixed':
                    pricePerNight = 20;
                    sports = 'Swimming';
                    break;
            }
            break;
    }

    let totalPrice = studentCount * pricePerNight * nights;

    if (studentCount >= 50) {
        totalPrice *= 0.5;
    } else if (studentCount >= 20) {
        totalPrice *= 0.85;
    } else if (studentCount >= 10) {
        totalPrice *= 0.95;
    }

    console.log(`${sports} ${totalPrice.toFixed(2)} lv.`);
}

calculateSchoolExpenses(['Spring', 'girls', '20', '7']);
