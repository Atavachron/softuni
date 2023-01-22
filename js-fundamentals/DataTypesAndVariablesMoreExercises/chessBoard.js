function createChessBoard(num) {
    let output = '<div class="chessboard">\n';
    for (let i = 1; i <= num; i++) {
        output += '\t<div>\n';
        for (let j = 1; j <= num; j++) {
            if (i % 2 !== 0) {
                if (j % 2 !== 0) {
                    output += '\t\t<span class="black"></span>\n';
                } else {
                    output += '\t\t<span class="white"></span>\n';
                }
            } else {
                if (j % 2 !== 0) {
                    output += '\t\t<span class="white"></span>\n';
                } else {
                    output += '\t\t<span class="black"></span>\n';
                }
            }
        }
        output += '\t</div>\n';
    }
    output += '</div>';
    console.log(output);
}

createChessBoard(5);
