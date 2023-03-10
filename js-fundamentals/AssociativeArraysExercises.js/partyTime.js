function partyTime(input) {
    let guestList = input.slice(0, input.indexOf('PARTY'));
    let guests = input.slice(input.indexOf('PARTY') + 1);

    let VIPGuests = [];
    let regularGuests = [];

    for (let guest of guestList) {
        if (guest[0] >= 0 && guest[0] <= 9) {
            VIPGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    }

    for (let guest of guests) {
        if (VIPGuests.includes(guest)) {
            VIPGuests.splice(VIPGuests.indexOf(guest), 1);
        } else {
            regularGuests.splice(regularGuests.indexOf(guest), 1);
        }
    }

    console.log(VIPGuests.length + regularGuests.length);
    VIPGuests.forEach(guest => console.log(guest));
    regularGuests.forEach(guest => console.log(guest));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
]);

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
]);
