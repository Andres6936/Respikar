const inc = 1000;

// @type{number} Determine how much space is available within the browser window.
const WINDOW_WIDTH = document.documentElement.clientWidth;

const PROPORTION_WITH_BROWSER_WINDOW = 0.6;
const wrapAnalogClock = document.querySelector('.wrap');
const SIZE_WRAP_ELEMENT = WINDOW_WIDTH * PROPORTION_WITH_BROWSER_WINDOW;

wrapAnalogClock.style.width = String(SIZE_WRAP_ELEMENT) + 'px';
wrapAnalogClock.style.height = String(SIZE_WRAP_ELEMENT) + 'px';

const PROPORTION_HOUR_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 3.708154506;
const hourAnalogClock = document.querySelector('.hour');
// @type{number} We calculate the size of hour element based in the size of analog clock
const SIZE_HOUR_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_HOUR_ELEMENT_WITH_THE_SIZE_WRAP_DIV;

hourAnalogClock.style.height = String(SIZE_HOUR_ELEMENT) + 'px';

const PROPORTION_MINUTE_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 2.632140137;
const minuteAnalogClock = document.querySelector('.minute');
// @type{number} We calculate the size of minute element based in the size of analog clock
const SIZE_MINUTE_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_MINUTE_ELEMENT_WITH_THE_SIZE_WRAP_DIV;

minuteAnalogClock.style.height = String(SIZE_MINUTE_ELEMENT) + 'px';

const PROPORTION_SECOND_ELEMENT_WITH_THE_SIZE_WRAP_DIV = 3.852842809;
const secondAnalogClock = document.querySelector('.second');
// @type{number} We calculate the size of second element based in the size of analog clock
const SIZE_SECOND_ELEMENT = SIZE_WRAP_ELEMENT / PROPORTION_SECOND_ELEMENT_WITH_THE_SIZE_WRAP_DIV;

secondAnalogClock.style.height = String(SIZE_SECOND_ELEMENT) + 'px';

clock();

function clock() {
    // get the current Date object from which we can obtain the current hour, minute and second
    const currentDate = new Date();

    // get the hours, minutes and seconds
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // rotating fraction --> how many fraction to rotate for each hand.
    const secondsFraction = seconds / 60;
    const minutesFraction = (secondsFraction + minutes) / 60;
    const hoursFraction = (minutesFraction + hours) / 12;

    // Then we are multiplying each fraction with 360 to get the actual degree
    // to rotate for each hand. (Why 360? Because 360 degree makes the circle).
    const secondsRotate = secondsFraction * 360;
    const minutesRotate = minutesFraction * 360;
    const hoursRotate = hoursFraction * 360;

    // apply the rotate style to each element
    // use backtick `` instead of single quotes ''
    hourAnalogClock.style.transform = `rotate(${hoursRotate}deg)`
    minuteAnalogClock.style.transform = `rotate(${minutesRotate}deg)`
    secondAnalogClock.style.transform = `rotate(${secondsRotate}deg)`
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(clock, inc);
