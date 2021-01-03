let countdown, z=0;

const displayTime = document.querySelector('.display-timeLeft');

const input = document.querySelector('input');

const reset = document.querySelector('.reset');

const pause = document.querySelector('.pause');

const resume = document.querySelector('.resume');

const menu = document.querySelectorAll('[data-time]');

function handleReset() {
    this.classList.add('btn-click');
    location.reload();
}

function handlePause() {
    this.classList.add('btn-click');
    var x = displayTime.textContent;
    var y = x.split(":");
    z = y[0]*60+Number(y[1]);
    clearInterval(countdown);
}

function handleResume() {
    this.classList.add('btn-click');
    timer(z);
}

function inputValue(e) {
    if (e.key == 'Enter') {
        const val = e.target.value;
        timer(val*60);
    }
}

function handleMenu() {
    this.classList.add('btn-click');
    const seconds = this.dataset.time;
    timer(seconds);
}

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then-Date.now())/1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutesLeft = Math.floor(seconds / 60);

    const remainderSeconds = seconds % 60;

    displayTime.textContent = `${minutesLeft} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

input.addEventListener('keyup', inputValue);

reset.addEventListener('mousedown', handleReset);

pause.addEventListener('mousedown', handlePause);

pause.addEventListener('mouseup', handleChange);

resume.addEventListener('mousedown', handleResume);

resume.addEventListener('mouseup', handleChange);

menu.forEach((element)=> {
    element.addEventListener('mousedown', handleMenu);
    element.addEventListener('mouseup', handleChange);
})

function handleChange() {
    this.classList.remove('btn-click');
}

