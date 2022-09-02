
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



const shareButton = document.querySelector('.social-share-button');

shareButton.addEventListener('click',() =>{
    if(shareButton.classList.contains('active')){
        shareButton.classList.remove('active');
        return;
    }
    shareButton.classList.add('active');
});

