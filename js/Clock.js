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
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);
