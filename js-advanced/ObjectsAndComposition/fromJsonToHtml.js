function solve(json) {
    let arr = JSON.parse(json);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach(obj => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    function makeKeyRow(arr) {
        let row = '<tr>';
        for (let key in arr[0]) {
            row += `<th>${escapeHTML(key.toString())}</th>`;
        }
        row += '</tr>';
        return row;
    }

    function makeValueRow(obj) {
        let row = '<tr>';
        for (let key in obj) {
            row += `<td>${escapeHTML(obj[key].toString())}</td>`;
        }
        row += '</tr>';
        return row;
    }

    function escapeHTML(text) {
        const replacements = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };

        return text.replace(/[&<>"']/g, match => replacements[match]);
    }

    console.log(outputArr.join('\n'));
}

solve(`[{"Name":"Stamat",
 "Score":5.5},
 {"Name":"Rumen",
 "Score":6}]`);
