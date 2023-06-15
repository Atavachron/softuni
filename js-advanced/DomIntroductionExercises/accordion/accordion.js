function toggle() {
    let btn = document.querySelector('.button');
    let text = document.querySelector('#extra');

    btn.textContent = btn.textContent === 'More' ? 'Less' : 'More';
    text.style.display =
        text.style.display === 'none' || !text.style.display ? 'block' : 'none';
}
