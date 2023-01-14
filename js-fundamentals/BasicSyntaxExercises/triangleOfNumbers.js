function logTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let buff = '';
        for (let j = 1; j <= i; j++) {
            buff += i + ' ';
        }
        console.log(buff);
    }
}

logTriangle(3);
// logTriangle(5);
// logTriangle(6);
