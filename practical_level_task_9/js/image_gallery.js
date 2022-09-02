

/* Start Header */
const menuIcon = document.querySelector('#header .menu-icon');
menuIcon.addEventListener('click', () => {
    const classList = menuIcon.classList;
    if(classList.contains('opened')){
        classList.remove('opened');
        hideNavbar();
        return;
    }
    classList.add('opened');
    showNavbar();

});
function showNavbar() {
    const nav = document.getElementById('side-navbar');
    nav.style.transform = 'translateX(350px)';
}
function hideNavbar() {
    const nav = document.getElementById('side-navbar');
    nav.style.transform = 'translateX(0)';
}
window.onresize = function (){
    menuIcon.classList.remove('opened');
    hideNavbar();
}
/* End Header */

/* Start Navbar */
const gridIcons = document.querySelectorAll('#side-navbar ul li');
const imageColumns = document.querySelectorAll('.img-container .column');
changeImageDisplay(gridIcons[0],'100%');
changeImageDisplay(gridIcons[1],'50%');
changeImageDisplay(gridIcons[2],'25%');
function changeImageDisplay(gridIcon,flexBasis) {
    gridIcon.addEventListener('click', () => {
        for (let i = 0; i < imageColumns.length; i++) {
            imageColumns[i].style.flexBasis = flexBasis;
        }
    });
}
/* End Navbar */

/* Start Image Grid View */
const imagesUrl = [
    'https://i.postimg.cc/90gX2HDq/image-10.jpg',
    'https://i.postimg.cc/y8gxVxX6/image-11.jpg',
    'https://i.postimg.cc/ydPYfZBj/image-13.jpg',
    'https://i.postimg.cc/m2qZ6Rxv/image-14.jpg',
    'https://i.postimg.cc/ZYw5ppwK/image-16.jpg',
    'https://i.postimg.cc/L6rR3TLR/image-17.jpg',
    'https://i.postimg.cc/4x9fDMsm/image-18.jpg',
    'https://i.postimg.cc/XvKVJCZW/image-19.jpg',
    'https://i.postimg.cc/HWzVzfkm/image-2.jpg',
    'https://i.postimg.cc/ZRTJy53d/image-20.jpg',
    'https://i.postimg.cc/026PS36c/image-21.jpg',
    'https://i.postimg.cc/4NnN5y0v/image-15.jpg',
    'https://i.postimg.cc/50nb5Wqk/image-23.jpg',
    'https://i.postimg.cc/h4ZKfgGX/image-24.jpg',
    'https://i.postimg.cc/13wSCqrF/image-25.jpg',
    'https://i.postimg.cc/9MFjQN5P/image-28.jpg',
    'https://i.postimg.cc/cJcSZGj4/image-29.jpg',
    'https://i.postimg.cc/vHPxYCJh/image-3.jpg',
    'https://i.postimg.cc/Qt4Z9kh2/image-30.jpg',
    'https://i.postimg.cc/pTDnPrv5/image-4.jpg',
    'https://i.postimg.cc/G3xsN4zZ/image-5.jpg',
    'https://i.postimg.cc/LXMnQSP9/image-6.jpg',
    'https://i.postimg.cc/hvDhg0MN/image-7.jpg',
    'https://i.postimg.cc/nzYM6WKv/image-9.jpg',
    'https://i.postimg.cc/kGHCZNHQ/image-22.jpg',
    'https://i.postimg.cc/Gt4wk8pH/image-27.jpg',
    'https://i.postimg.cc/DzhTtwxM/image-26.jpg',
];
function createImageItem(url) {

    let imageItem = document.createElement('div');
    imageItem.setAttribute('class', 'image-item');

    let aTag = document.createElement('a');
    aTag.href = url;
    aTag.target = '_blank';

    let image = document.createElement('img');
    image.src = url;

    let imageShadow = document.createElement('div');
    imageShadow.setAttribute('class', 'image-shadow');

    aTag.appendChild(image);

    imageItem.appendChild(aTag);
    imageItem.appendChild(imageShadow);

    return imageItem;
}
function addImageToColumns() {
    let columns = document.querySelectorAll('.img-container .column');
    const numberOfImagesPerColumn = Math.floor(imagesUrl.length / 4);
    let count = 0;
    let imageNumber = numberOfImagesPerColumn;
    for (let i = 0; i < columns.length; i++) {
        if (count === imageNumber) {
            return;
        }
        for (; count < imageNumber; count++) {
            columns[i].appendChild(createImageItem(imagesUrl[count]));
        }
        imageNumber += numberOfImagesPerColumn;
    }
}
addImageToColumns();
/* End Image Grid View */





