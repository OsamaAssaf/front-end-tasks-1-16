


const backToTopBtn = document.getElementById('back-to-top');

window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'all';
    }else{
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
    }
}
backToTopBtn.addEventListener('click',() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});