// Write a JS function that calculates the date of the previous day by given year, month, and day.
// The input comes as three numeric parameters. The first element is the year, the second is the month and the third is
// the day.
// The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

function solve(y, m, d) {
    let date = new Date(y, m - 1, d - 1);

    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDate = date.getDate();

    console.log(`${currentYear}-${currentMonth}-${currentDate}`);
}

solve(2016, 9, 30);
solve(2015, 5, 10);
