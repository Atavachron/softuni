//Add 15 minutes to the hours and minutes received as an argument and display as hours:minutes
//Make sure there is a leading 0 if minutes are less than 10

function add15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalInMinutes = hours * 60 + minutes + 15;

    hours = Math.floor(totalInMinutes / 60);
    minutes = totalInMinutes % 60;

    if (hours >= 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

add15Minutes(['1', '46']);
add15Minutes(['0', '01']);
add15Minutes(['23', '59']);
add15Minutes(['11', '08']);
add15Minutes(['12', '49']);
