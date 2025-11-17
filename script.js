const WeekText = document.getElementsByClassName("Vecka")[0];
const DateText = document.getElementsByClassName("Datum")[0];
const TimeText = document.getElementsByClassName("Time")[0];

function getWeekNumber(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + oneJan.getDay() + 1) / 7);
}

function StartTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    TimeText.textContent = h + ":" + m + ":" + s;

    setTimeout(StartTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}


const today = new Date();
const currentWeek = getWeekNumber(today);

WeekText.textContent = currentWeek;
DateText.textContent = today.toISOString().split('T')[0];
StartTime();
