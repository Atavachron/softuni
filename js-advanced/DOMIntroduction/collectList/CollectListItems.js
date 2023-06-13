function extractText() {
    let list = document.getElementsByTagName('li');
    let result = document.getElementById('result');

    let listArray = Array.from(list);
    let textArray = listArray.map(li => li.textContent);

    result.value = textArray.join('\n');
}
