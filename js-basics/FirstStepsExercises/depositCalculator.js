//Calculate the total amount one will receive for a termed deposit with a fixed annual interest
//The input includes the deposited amount, the term in months, and the annual interest rate
//Use the formula "amount = deposit + term * ((deposit * interest) / 12)"
//Note that when multiplying the deposited amount by the interest, the interest rate must be divided by 100

function calculateDeposit(input) {
    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let totalAmount =
        depositAmount +
        depositTerm * ((depositAmount * annualInterestRate) / 100 / 12);

    console.log(totalAmount);
}

calculateDeposit(['2350', '6 ', '7 ']);
