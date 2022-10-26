//Check the speed input and log the corresponding response depending on the speeed

function checkSpeed(input) {
    let speed = Number(input[0]);

    if (speed <= 10) {
        console.log('slow');
    } else if (speed <= 50) {
        console.log('average');
    } else if (speed <= 150) {
        console.log('fast');
    } else if (speed <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    }
}

checkSpeed(['8']);
checkSpeed(['49.5']);
checkSpeed(['126']);
checkSpeed(['160']);
checkSpeed(['3500']);
