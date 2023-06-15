function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let table = document.querySelector('.container');
    let rows = table.querySelectorAll('tbody tr');

    function onClick() {
        let searchValue = document
            .getElementById('searchField')
            .value.toLowerCase();

        for (let row of rows) {
            if (row.textContent.toLowerCase().includes(searchValue)) {
                row.className = 'select';
            } else {
                row.className = '';
            }
        }
    }
}
