function checkIfInvalid(input) {
    let num = Number(input[0]);

    let isValid = false;

    if ((num >= 100 && num <= 200) || num === 0) {
        isValid = true;
    }

    if (!isValid) {
        console.log('invalid');
    }
}

checkIfInvalid(['75']);
checkIfInvalid(['150']);
checkIfInvalid(['220']);
checkIfInvalid(['199']);
checkIfInvalid(['-1']);
checkIfInvalid(['100']);
checkIfInvalid(['200']);
checkIfInvalid(['0']);
