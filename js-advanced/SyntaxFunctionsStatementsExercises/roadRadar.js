function solve(speed, area) {
    let limit;

    switch (area) {
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }

    let status;

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    } else if (speed - limit <= 20) {
        status = 'speeding';
    } else if (speed - limit <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(
        `The speed is ${
            speed - limit
        } km/h faster than the allowed speed of ${limit} - ${status}`
    );
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
