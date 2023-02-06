function validatePassword(password) {
    let output = '';

    if (
        hasTwoDigits(password) &&
        isPasswordLengthOk(password) &&
        isPasswordAlphanumeric(password)
    ) {
        output = 'Password is valid';
    }

    if (!isPasswordLengthOk(password))
        output += 'Password must be between 6 and 10 characters\n';
    if (!isPasswordAlphanumeric(password))
        output += 'Password must consist only of letters and digits\n';
    if (!hasTwoDigits(password))
        output += 'Password must have at least 2 digits';

    function hasTwoDigits(pwd) {
        let counter = 0;

        for (let i = 0; i < pwd.length; i++) {
            let code = pwd.charCodeAt(i);

            if (code > 47 && code < 58) {
                counter++;
            }
        }

        return counter >= 2;
    }

    function isPasswordLengthOk(pwd) {
        return pwd.length >= 6 && pwd.length <= 10;
    }

    function isPasswordAlphanumeric(pwd) {
        for (let i = 0; i < pwd.length; i++) {
            let code = pwd.charCodeAt(i);

            if (
                !(code > 47 && code < 58) &&
                !(code > 64 && code < 91) &&
                !(code > 96 && code < 123)
            ) {
                return false;
            }
        }
        return true;
    }

    return output;
}

console.log(validatePassword('logIn'));
console.log(validatePassword('MyPass123'));
console.log(validatePassword('Pa$s$s'));
