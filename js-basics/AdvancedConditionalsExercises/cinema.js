//Calculate cinema income based on the number of rows and columns in the hall and the type of screening

function calculateIncome(input) {
    let screening = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let seats = rows * columns;
    let ticketPrice = 0;

    switch (screening) {
        case 'Premiere':
            ticketPrice = 12;
            break;
        case 'Normal':
            ticketPrice = 7.5;
            break;
        case 'Discount':
            ticketPrice = 5;
            break;
    }

    let income = ticketPrice * seats;
    console.log(`${income.toFixed(2)} leva`);
}

calculateIncome(['Premiere', '10', '12']);
calculateIncome(['Normal', '21', '13']);
calculateIncome(['Discount', '12', '30']);
