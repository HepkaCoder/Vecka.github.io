const WeekText = document.getElementsByClassName("Vecka")[0];
const DateText = document.getElementsByClassName("Datum")[0];

function getWeekNumber(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + oneJan.getDay() + 1) / 7);
}

const currentWeek = getWeekNumber(new Date());
WeekText.textContent = currentWeek;

DateText.textContent = new Date.getDate()
