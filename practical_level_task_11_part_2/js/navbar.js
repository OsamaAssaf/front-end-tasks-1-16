

const navToggleBtn = document.querySelector('.nav-header .nav-toggle');
const links = document.querySelector('.links');

navToggleBtn.addEventListener('click',() => {
    const classList = links.classList;
    classList.toggle('show');
});

window.addEventListener('resize',() => {
    if(window.innerWidth >= 800){
        links.classList.remove('show');
    }
});