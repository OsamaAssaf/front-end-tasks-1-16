

const switchButton = document.querySelector('header .switch-btn');
const video = document.querySelector('header .video-container');

switchButton.addEventListener('click',() => {
    if(switchButton.classList.contains('pause')){
        switchButton.classList.remove('pause');
        video.play();
        return;
    }
    switchButton.classList.add('pause');
    video.pause();
});


window.addEventListener('load',() => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

