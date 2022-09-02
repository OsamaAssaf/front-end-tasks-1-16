const hamburgerButton = document.querySelector('.navbar-2 .hamburger');
const navLinks = document.querySelector('.navbar-2 .nav-links');
hamburgerButton.addEventListener('click',function (){
    navLinks.classList.toggle('open');
});