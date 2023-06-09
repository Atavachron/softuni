function solve(data, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let el of data) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    let sorted = tickets.sort((a, b) => {
        if (criterion === 'price') {
            return a[criterion] - b[criterion];
        } else {
            return a[criterion].localeCompare(b[criterion]);
        }
    });
    return sorted;
}
