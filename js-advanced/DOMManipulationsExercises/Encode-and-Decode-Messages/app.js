function encodeAndDecodeMessages() {
    const ENCODE = 'Encode and send it';

    const buttons = Array.from(document.querySelectorAll('#main button'));
    buttons.forEach(button => button.addEventListener('click', convert));

    function convert(e) {
        if (e.target.textContent === ENCODE) {
            let text = e.target.previousElementSibling.value;

            let encodedText = text
                .split('')
                .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                .join('');

            e.target.parentElement.nextElementSibling.children[1].value =
                encodedText;
            e.target.previousElementSibling.value = '';
        } else {
            let text = e.target.previousElementSibling.value;

            let decodedText = text
                .split('')
                .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
                .join('');

            e.target.previousElementSibling.value = decodedText;
        }
    }
}
