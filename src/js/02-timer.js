import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDateTime = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const timerDate = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]')

buttonStart.setAttribute('disabled', true);

let interval = null;
let currentDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
     currentDate = selectedDates[0];
    if (selectedDates[0] > new Date()) {
      buttonStart.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputDateTime, options);

function addZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addDate(ev) {
  timerDate.innerHTML = ev.days;
  timerHours.innerHTML = ev.hours;
  timerMinutes.innerHTML = ev.minutes;
  timerSeconds.innerHTML = ev.seconds;
}

buttonStart.addEventListener('click', () => {
  interval = setInterval(() => {
    const futureDate = currentDate - new Date();
    let arrayDays = convertMs(futureDate);
    addDate(arrayDays);
    console.log(futureDate);
    if (futureDate < 1000) {
      clearInterval(interval);
    }
  }, 1000);
});