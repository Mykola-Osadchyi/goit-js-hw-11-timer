import timerTemplate from '../templates/timer-template.hbs';
import items from '../timer.json'

const timeBoardRef = document.querySelector('#timer-1');
const markup = timerTemplate(items);
timeBoardRef.insertAdjacentHTML('beforeend', markup);