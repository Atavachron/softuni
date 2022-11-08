function calculatePrice(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case 'June':
        case 'September':
            studioPrice = 75.2;
            apartmentPrice = 68.7;
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }

    if (month === 'May' || month === 'October') {
        if (nights > 14) {
            studioPrice *= 0.7;
        } else if (nights > 7) {
            studioPrice *= 0.95;
        }
    } else if (month === 'June' || month === 'September') {
        if (nights > 14) {
            studioPrice *= 0.8;
        }
    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    let totalApartmentPrice = apartmentPrice * nights;
    let totalStudioPrice = studioPrice * nights;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}

calculatePrice(['May', '15']);
calculatePrice(['June', '14']);
