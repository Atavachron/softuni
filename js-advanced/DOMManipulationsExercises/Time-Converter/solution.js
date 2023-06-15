function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('[value="Convert"]'));

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    function calculate(value, unit) {
        const inDays = value / RATIOS[unit];

        return {
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds,
        };
    }

    function convert(e) {
        let unit = e.currentTarget.previousElementSibling.id;
        let input = Number(e.currentTarget.previousElementSibling.value);

        let time = calculate(input, unit);

        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }

    buttons.forEach(button => button.addEventListener('click', convert));
}
