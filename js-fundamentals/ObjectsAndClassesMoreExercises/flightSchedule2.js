function flightSchedule(input) {
    let [flightsArr, changesArr, statusArr] = input;

    let flights = {};

    for (let el of flightsArr) {
        let flightNumber = el.split(' ')[0];
        let Destination = el.split(' ').slice(1).join(' ');
        flights[flightNumber] = { Destination, Status: 'Ready to fly' };
    }

    for (let el of changesArr) {
        let [flightNumber, currentStatus] = el.split(' ');

        if (flights.hasOwnProperty(flightNumber)) {
            flights[flightNumber].Status = currentStatus;
        }
    }

    for (let flight in flights) {
        if (flights[flight].Status === statusArr[0]) {
            console.log(flights[flight]);
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

        'SK430 Cancelled',
    ],

    ['Cancelled'],
]);
