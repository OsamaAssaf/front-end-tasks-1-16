

const themeSwitch = document.querySelector('#header .theme-switch');
const root = document.querySelector(':root');

themeSwitch.addEventListener('click',function (){
    const circle = themeSwitch.querySelector('.circle');
    circle.classList.toggle('dark-switch');
    root.classList.toggle('dark-mode');
});

const hamburgerIcon = document.querySelector('#navbar .hamburger');
hamburgerIcon.addEventListener('click',function (){
    const navUl = document.querySelector('#navbar ul');
    navUl.classList.toggle('show');

    hamburgerIcon.classList.toggle('opened');
});