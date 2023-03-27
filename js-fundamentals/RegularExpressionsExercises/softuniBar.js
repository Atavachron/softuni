function calculateSales(input) {
    let pattern =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(?:\.[0-9]+)?)\$/;
    let total = 0;

    for (let line of input) {
        let match = [];
        if (line === 'end of shift') {
            break;
        }

        if (pattern.test(line)) {
            match = line.match(pattern);
            let price = Number(match.groups.count) * Number(match.groups.price);
            total += price;
            console.log(
                `${match.groups.customer}: ${
                    match.groups.product
                } - ${price.toFixed(2)}`
            );
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

calculateSales([
    '%InvalidName%<Croissant>|2|10.3$',

    '%Peter%<Gum>1.3$',

    '%Maria%<Cola>|1|2.4',

    '%Valid%<Valid>valid|10|valid20$',

    'end of shift',
]);
