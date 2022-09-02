const endDate = new Date(2022, 8, 10, 11, 30, 0, 0);


const timerContainer = document.querySelector('.gift-container .text-container .timer-container');
const daysTimer = timerContainer.querySelector('.days h3');
const hoursTimer = timerContainer.querySelector('.hours h3');
const minutesTimer = timerContainer.querySelector('.minutes h3');
const secondsTimer = timerContainer.querySelector('.seconds h3');

const endDateElement = document.querySelector('.gift-container .text-container .end-date');

let timer;

window.addEventListener('DOMContentLoaded', () => {
    displayEndDate();
    displayTimer();
    setTimer();
});

function displayEndDate() {
    const currentDate = new Date();
    if (dateDiffInSeconds(endDate, currentDate) <= 0) {
        endDateElement.textContent = 'sorry, this giveaway has expired!';
        return;
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNumber = endDate.getDate();
    const dayName = days[endDate.getDay()];
    const monthName = months[endDate.getMonth()];
    const yearNumber = endDate.getFullYear();
    const time = formatAMPM(endDate);
    endDateElement.textContent = `giveaway ends on ${dayName}, ${dayNumber} ${monthName} ${yearNumber} ${time}`;
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ampm;
}

function displayTimer() {
    const currentDate = new Date();
    if (dateDiffInSeconds(endDate, currentDate) <= 0) {console.log(1);
        daysTimer.textContent = '00';
        hoursTimer.textContent = '00';
        minutesTimer.textContent = '00';
        secondsTimer.textContent = '00';
        endDateElement.textContent = 'sorry, this giveaway has expired!';
        clearInterval(timer);
        timer = null;
        return;
    }

    const diffArray = calculateDiffs(endDate, currentDate);

    daysTimer.textContent = diffArray[0].toString();
    hoursTimer.textContent = diffArray[1].toString();
    minutesTimer.textContent = diffArray[2].toString();
    secondsTimer.textContent = diffArray[3].toString();
}

function setTimer() {
    timer = setInterval(onTick, 1000);

}

function onTick() {

    displayTimer();
}

function calculateDiffs(endDate, currentDate) {
    let delta = Math.abs(endDate - currentDate) / 1000;

    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    let seconds = delta % 60;

    return [numberFormatting(days), numberFormatting(hours), numberFormatting(minutes), numberFormatting(Math.floor(seconds))];
}


function dateDiffInSeconds(endDate, startDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000;
}

function numberFormatting(number){
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}
