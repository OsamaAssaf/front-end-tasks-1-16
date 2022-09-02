const welcomeText = document.querySelector('.welcome-text');
const myNameText = document.querySelector('.my-name-text');
const coolText = document.querySelector('.cool-text');

const arrWelcomeText = welcomeText.textContent.split('');
const arrMyNameText = myNameText.textContent.split('');
const arrCoolText = coolText.textContent.split('');

const welcomePlayBtn = document.querySelector('.welcome>.play-button');
const myNamePlayBtn = document.querySelector('.my-name>.play-button');
const coolPlayBtn = document.querySelector('.cool>.play-button');

function makeAnimation(text, array, selector) {

    text.textContent = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ' ') {
            text.innerHTML += '<span>' + '\u00A0' + '</span>';
        } else {
            text.innerHTML += '<span>' + array[i] + '</span>';
        }
    }
    let i = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const text = document.querySelectorAll(selector)[i];
        text.classList.add('animate');
        i++;
        if (i === array.length) {
            complete();
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
}

welcomePlayBtn.addEventListener('click', () => {
    makeAnimation(welcomeText, arrWelcomeText, '.welcome span');
});

myNamePlayBtn.addEventListener('click', () => {
    makeAnimation(myNameText, arrMyNameText, '.my-name span');
});

coolPlayBtn.addEventListener('click', () => {
    makeAnimation(coolText, arrCoolText, '.cool span');
});




