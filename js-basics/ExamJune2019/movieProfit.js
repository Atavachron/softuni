function solve(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPct = Number(input[4]);

    let revenuePerDay = ticketsCount * ticketPrice;
    let totalRevenue = revenuePerDay * daysCount;
    let studioIncome = totalRevenue - (totalRevenue * cinemaPct) / 100;

    console.log(
        `The profit from the movie ${movieName} is ${studioIncome.toFixed(
            2
        )} lv.`
    );
}

solve(['The Programmer', '20', '500', '7.50', '7']);
solve(['Python Basics', '40', '34785', '10.45', '14']);
solve(['The Jungle', '22', '20500', '9.37', '30']);
