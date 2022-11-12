const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let changingBgColor;

startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);
stopButton.setAttribute('disabled', '');

function startColorChanging() {
    changingBgColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.setAttribute('disabled', '');
    stopButton.removeAttribute('disabled');
}

function stopColorChanging() {
    clearInterval(changingBgColor);
    stopButton.setAttribute('disabled', '');
    startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}