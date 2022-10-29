function chooseCheapestTransport(input) {
    let km = Number(input[0]);
    let timeOfDay = input[1];

    let tariff = 0;
    let initialFee = 0;

    if (km < 20) {
        initialFee = 0.7;
        if (timeOfDay === 'day') {
            tariff = 0.79;
        } else if (timeOfDay === 'night') {
            tariff = 0.9;
        }
    } else if (km < 100) {
        tariff = 0.09;
    } else {
        tariff = 0.06;
    }

    let tripPrice = km * tariff + initialFee;
    console.log(tripPrice.toFixed(2));
}

chooseCheapestTransport(['5', 'day']);
chooseCheapestTransport(['7', 'night']);
chooseCheapestTransport(['25', 'day']);
chooseCheapestTransport(['180', 'night']);
