function buyTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);
    let singleTicketPrice;
    let totalTicketPrice;

    if (category === 'Normal') {
        singleTicketPrice = 249.99;
    } else if (category === 'VIP') {
        singleTicketPrice = 499.99;
    }

    if (peopleCount <= 4) {
        budget *= 0.25;
    } else if (peopleCount <= 9) {
        budget *= 0.4;
    } else if (peopleCount <= 24) {
        budget *= 0.5;
    } else if (peopleCount <= 49) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }

    totalTicketPrice = peopleCount * singleTicketPrice;
    let diff = Math.abs(budget - totalTicketPrice);

    if (budget >= totalTicketPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

buyTickets(['1000', 'Normal', '1']);
buyTickets(['30000', 'VIP', '49']);
