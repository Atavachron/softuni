function getNextDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day + 1);
    console.log(
        `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
        }-${currentDate.getDate()}`
    );
}

getNextDay(2016, 9, 30);
