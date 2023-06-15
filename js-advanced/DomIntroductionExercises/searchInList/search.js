function search() {
    let towns = Array.from(document.querySelectorAll('#towns li'));
    let searchValue = document.getElementById('searchText').value.toLowerCase();
    let result = document.getElementById('result');
    let matches = 0;
    result.textContent = '';

    towns.forEach(town => {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';

        if (town.textContent.toLowerCase().includes(searchValue)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    });

    result.textContent = `${matches} matches found`;
}
