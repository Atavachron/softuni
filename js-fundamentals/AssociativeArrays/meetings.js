function scheduleMeetings(input) {
    let meetings = {};

    input.forEach(el => {
        let [day, name] = el.split(' ');
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

scheduleMeetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim',
]);
