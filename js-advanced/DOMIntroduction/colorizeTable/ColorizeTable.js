function colorize() {
    let table = document.querySelector('table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.backgroundColor = 'teal';
        }
    }
}
