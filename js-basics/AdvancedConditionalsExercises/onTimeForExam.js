function checkIfOnTime(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinutes;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinutes;

    let diff = Math.abs(examTimeInMinutes - arrivalTimeInMinutes);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (
        examTimeInMinutes === arrivalTimeInMinutes ||
        (arrivalTimeInMinutes < examTimeInMinutes &&
            arrivalTimeInMinutes >= examTimeInMinutes - 30)
    ) {
        console.log(`On time`);
    } else if (arrivalTimeInMinutes < examTimeInMinutes - 30) {
        console.log('Early');
    } else {
        console.log('Late');
    }

    if (arrivalTimeInMinutes < examTimeInMinutes) {
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    } else if (arrivalTimeInMinutes > examTimeInMinutes) {
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    }
}

checkIfOnTime(['9', '30', '9', '50']);
checkIfOnTime(['9', '00', '8', '30']);
checkIfOnTime(['9', '00', '10', '30']);
checkIfOnTime(['14', '00', '13', '55']);
checkIfOnTime(['10', '00', '10', '00']);
checkIfOnTime(['11', '30', '10', '55']);
