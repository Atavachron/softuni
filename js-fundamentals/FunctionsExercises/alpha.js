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
        return true;
    }
}

console.log(isPasswordAlphanumeric('arar'));
