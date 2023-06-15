function solve() {
    let inputEl = document.getElementById('input');
    let outputEl = document.getElementById('output');

    let text = inputEl.value;
    let sentencesArray = text
        .split('.')
        .filter(s => s !== '')
        .map(s => s + '.');
    let paragraphCount = Math.ceil(sentencesArray.length / 3);

    for (let i = 0; i < paragraphCount; i++) {
        let p = document.createElement('p');
        let joined = sentencesArray.splice(0, 3).join('');
        p.textContent = joined;
        outputEl.appendChild(p);
    }
}
