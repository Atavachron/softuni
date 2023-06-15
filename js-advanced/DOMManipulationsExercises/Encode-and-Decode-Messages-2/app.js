function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = [
        ...document.querySelectorAll('#main button'),
    ];

    const textContainers = [...document.querySelectorAll('#main textarea')];

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    function transformText(text, callback) {
        return text.split('').map(callback).join('');
    }

    function prevChar(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }

    function encodeAndSend(e) {
        textContainers[1].value = transformText(
            textContainers[0].value,
            nextChar
        );
        textContainers[0].value = '';
    }

    function decodeAndRead(e) {
        textContainers[1].value = transformText(
            textContainers[1].value,
            prevChar
        );
    }
}
