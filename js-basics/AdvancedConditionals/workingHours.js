//Office is closed on sundays and on any other day before 10 and after 18.

function checkIfOpen(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (day === 'Sunday' || time < 10 || time >= 18) {
        console.log('closed');
    } else {
        console.log('open');
    }
}

checkIfOpen(['11', 'Monday']);
checkIfOpen(['19', 'Friday']);
checkIfOpen(['11', 'Sunday']);
