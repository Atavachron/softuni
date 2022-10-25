//Calculate how many hours per day would one need to read to finish a book.
//The input includes the total number of pages, the number of pages read per hour, and the number of days available.

function calculateHoursPerDay(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    //Calculate the total number of hours required to read the book.
    //Divide the total pages by the number of pages per hour.
    let totalHours = totalPages / pagesPerHour;

    //Calculate how many hours per day are required
    //Divide the total hours by the number of days
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);
}

calculateHours(['212 ', '20 ', '2 ']);
