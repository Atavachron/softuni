function calculateReadingTime(pages, pagesPerHour, days) {
    let pagesPerDay = pages / days;
    let hoursPerDay = pagesPerDay / pagesPerHour;
    console.log(hoursPerDay);
}

calculateReadingTime(212, 20, 2);
calculateReadingTime(432, 15, 4);
