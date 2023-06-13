function sumTable() {
    let table = document.getElementsByTagName('table')[0];
    let rows = table.querySelectorAll('tr');
    let rowsArr = Array.from(rows);
    let resultEl = document.getElementById('sum');
    let sum = 0;

    for (let i = 1; i < rowsArr.length - 1; i++) {
        let row = rowsArr[i];

        let td = row.querySelector('td:nth-child(2)');

        sum += Number(td.textContent);
    }

    resultEl.textContent = sum;
}
