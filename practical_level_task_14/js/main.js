

const menuIcon = document.querySelector('#navbar .menu-icon');

menuIcon.addEventListener('click',function (){
    const navList = document.querySelector('#navbar ul');
    navList.classList.toggle('opened');
});