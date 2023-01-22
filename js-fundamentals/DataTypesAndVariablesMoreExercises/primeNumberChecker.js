function checkIfPrime(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime ? 'true' : 'false');
}

checkIfPrime(7);
checkIfPrime(8);
checkIfPrime(81);
