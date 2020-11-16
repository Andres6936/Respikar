const inc = 1000;

const WINDOW_WIDTH = document.documentElement.clientWidth;

const wrapAnalogClock = document.querySelector('.wrap');
const SIZE_WRAP_ELEMENT = WINDOW_WIDTH * 0.6;

wrapAnalogClock.style.width = String(SIZE_WRAP_ELEMENT) + 'px';
wrapAnalogClock.style.height = String(SIZE_WRAP_ELEMENT) + 'px';

const hourAnalogClock = document.querySelector('.hour');
const SIZE_HOUR_ELEMENT = SIZE_WRAP_ELEMENT / 3.708154506;

hourAnalogClock.style.height = String(SIZE_HOUR_ELEMENT) + 'px';

const minuteAnalogClock = document.querySelector('.minute');
const SIZE_MINUTE_ELEMENT = SIZE_WRAP_ELEMENT / 2.632140137;

minuteAnalogClock.style.height = String(SIZE_MINUTE_ELEMENT) + 'px';

const secondAnalogClock = document.querySelector('.second');
const SIZE_SECOND_ELEMENT = SIZE_WRAP_ELEMENT / 3.852842809;

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
