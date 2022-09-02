
const openBtn = document.querySelector('header .center .open-btn');
const closeBtn = document.querySelector('.model-overlay .model-container .close-btn');
const modelOverlay = document.querySelector('.model-overlay');

openBtn.addEventListener('click',() => {
    modelOverlay.classList.toggle('show');
});
closeBtn.addEventListener('click',() => {
    modelOverlay.classList.remove('show');
});

