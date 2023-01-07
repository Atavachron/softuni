function solve(input) {
    let voucherCost = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let tickets = 0;
    let others = 0;

    while (command !== 'End') {
        let purchase = command;
        let cost = 0;

        if (purchase.length > 8) {
            cost = purchase.charCodeAt(0) + purchase.charCodeAt(1);
            if (voucherCost - cost < 0) {
                break;
            } else {
                voucherCost -= cost;
                tickets++;
            }
        } else {
            cost = purchase.charCodeAt(0);
            if (voucherCost - cost < 0) {
                break;
            } else {
                voucherCost -= cost;
                others++;
            }
        }

        command = input[index];
        index++;
    }

    console.log(tickets);
    console.log(others);
}

solve(['300', 'Captain Marvel', 'popcorn', 'Pepsi']);
solve(['1500', 'Avengers: Endgame', 'Bohemian Rhapsody', 'Deadpool 2', 'End']);
