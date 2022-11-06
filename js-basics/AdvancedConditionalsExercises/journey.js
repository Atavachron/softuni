function selectHolidayDestination(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price;
    let region;
    let accommodation;

    if (budget <= 100) {
        region = 'Bulgaria';
        if (season === 'summer') {
            price = budget * 0.3;
        } else if (season === 'winter') {
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        region = 'Balkans';
        if (season === 'summer') {
            price = budget * 0.4;
        } else if (season === 'winter') {
            price = budget * 0.8;
        }
    } else {
        region = 'Europe';
        price = budget * 0.9;
    }

    if (season === 'winter' || region === 'Europe') {
        accommodation = 'Hotel';
    } else {
        accommodation = 'Camp';
    }

    console.log(`Somewhere in ${region}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);
}

selectHolidayDestination(['50', 'summer']);
selectHolidayDestination(['75', 'winter']);
selectHolidayDestination(['312', 'summer']);
selectHolidayDestination(['678.53', 'winter']);
selectHolidayDestination(['1500', 'summer']);
