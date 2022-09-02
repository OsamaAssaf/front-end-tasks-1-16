window.onload = ()=>{
    console.log('loading done');
};

const gridIcons = document.querySelectorAll('.row i');
const imageColumn = document.querySelectorAll('.column');

gridIcons[0].addEventListener('click',() => {
    console.log(1);
    imageColumn.forEach((value) => {
        value.style.flexBasis = '100%';
    });

});
gridIcons[1].addEventListener('click',() => {
    console.log(2);
    imageColumn.forEach((value) => {
        value.style.flexBasis = '50%';
    });
});
gridIcons[2].addEventListener('click',() => {
    console.log(3);
    imageColumn.forEach((value) => {
        value.style.flexBasis = '25%';
    });
});

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

