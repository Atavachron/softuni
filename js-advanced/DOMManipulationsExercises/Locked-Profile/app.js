function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile > button'));

    buttons.forEach(button => button.addEventListener('click', toggleInfo));

    function toggleInfo(e) {
        //check if the profile is locked
        let isLocked =
            e.target.parentElement.querySelector('[value="lock"]').checked;

        //access hidden area
        let hiddenInfo = e.target.previousElementSibling;

        if (isLocked) return;

        if (e.target.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            e.target.textContent = 'Hide it';
        } else {
            hiddenInfo.style.display = 'none';
            e.target.textContent = 'Show more';
        }
    }
}
