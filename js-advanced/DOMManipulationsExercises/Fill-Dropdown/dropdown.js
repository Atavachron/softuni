function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    let selectEl = document.getElementById('menu');
    let option = document.createElement('option');

    option.textContent = inputText;
    option.value = inputValue;

    selectEl.appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
