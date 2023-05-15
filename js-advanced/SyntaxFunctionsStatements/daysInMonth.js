// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.

function solve(month, year) {
    //The 0 gives the last day of the previous month. Month are zero-indexed
    let currentDate = new Date(year, month, 0);
    return currentDate.getDate();
}

solve(1, 2012);
solve(2, 2021);
