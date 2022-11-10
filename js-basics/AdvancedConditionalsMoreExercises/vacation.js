function chooseHolidayDestination(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let accommodation;
    let total;

    switch (season) {
        case 'Summer':
            destination = 'Alaska';
            break;
        case 'Winter':
            destination = 'Morocco';
            break;
    }

    if (budget <= 1000) {
        accommodation = 'Camp';
        switch (season) {
            case 'Summer':
                total = budget * 0.65;
                break;
            case 'Winter':
                total = budget * 0.45;
                break;
        }
    } else if (budget <= 3000) {
        accommodation = 'Hut';
        switch (season) {
            case 'Summer':
                total = budget * 0.8;
                break;
            case 'Winter':
                total = budget * 0.6;
                break;
        }
    } else {
        accommodation = 'Hotel';
        total = budget * 0.9;
    }
    console.log(`${destination} - ${accommodation} - ${total.toFixed(2)}`);
}

chooseHolidayDestination(['800', 'Summer']);
