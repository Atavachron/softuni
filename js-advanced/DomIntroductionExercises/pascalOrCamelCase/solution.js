function solve() {
    let str = document.getElementById('text').value.toLowerCase();
    let action = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');
    let output = '';

    if (action !== 'Camel Case' && action !== 'Pascal Case') {
        result.textContent = 'Error!';
        return;
    }

    let arr = str.split(' ');
    let startingPoint = 0;

    if (action === 'Camel Case') {
        output += arr[0];
        startingPoint = 1;
    }

    for (let i = startingPoint; i < arr.length; i++) {
        let currentWord = arr[i];
        output += currentWord[0].toUpperCase() + currentWord.slice(1);
    }

    result.textContent = output;
}
