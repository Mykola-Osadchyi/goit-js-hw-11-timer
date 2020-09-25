const refs = {
  restOfDays: document.querySelector('span[data-value="days"]'),
  restOfHours: document.querySelector('span[data-value="hours"]'),
  restOfMinutes: document.querySelector('span[data-value="mins"]'),
  restOfSeconds: document.querySelector('span[data-value="secs"]'),
};

const startTime = new Date('Dec 31, 2020');

const countdownTimer = setInterval(() => {
  const currentTime = Date.now();
  const deltaTime = startTime - currentTime;
  updateClock(deltaTime);
}, 1000);

function updateClock(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.restOfDays.textContent = `${days}`;
  refs.restOfHours.textContent = `${hours}`;
  refs.restOfMinutes.textContent = `${mins}`;
  refs.restOfSeconds.textContent = `${secs}`;
};

function pad(value) {
  return String(value).padStart(2, '0');
};
