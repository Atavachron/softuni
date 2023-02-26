function flightSchedule(input) {
    let [flights, changes, statuses] = input;

    let obj = {};

    flights.forEach(flight => {
        let flightArr = flight.split(' ');
        let flightNumber = flightArr[0];
        let destination = flightArr.slice(1).join(' ');

        obj[flightNumber] = { destination };
    });

    changes.forEach(change => {
        let [flightNumber, status] = change.split(' ');
        if (obj.hasOwnProperty(flightNumber)) {
            obj[flightNumber].status = status;
        } else {
            return;
        }
    });

    let status = statuses[0];
    if (status === 'Ready to fly') {
        for (let flightNumber in obj) {
            let currentFlight = obj[flightNumber];
            if (!currentFlight.hasOwnProperty('status')) {
                currentFlight.status = 'Ready to fly';
                console.log(
                    `{ Destination: '${currentFlight.destination}', Status: '${currentFlight.status}' }`
                );
            }
        }
    } else {
        for (let flightNumber in obj) {
            let currentFlight = obj[flightNumber];
            if (currentFlight.hasOwnProperty('status')) {
                console.log(
                    `{ Destination: '${currentFlight.destination}', Status: '${currentFlight.status}' }`
                );
            }
        }
    }
}

flightSchedule([
    [
        'WN269 Delaware',

        'FL2269 Oregon',

        'WN498 Las Vegas',

        'WN3145 Ohio',

        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania',
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled',
    ],
    ['Ready to fly'],
]);
