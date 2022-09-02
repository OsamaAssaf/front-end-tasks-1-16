/* Start Animated Header */
const headerElement = document.querySelector('#header h1');
const text = headerElement.textContent;
headerElement.innerHTML = '';
for (let letter of text) {
    if (letter === ' ') {
        headerElement.innerHTML += '<span><pre>' + letter + '</pre></span>';
        continue;
    }
    headerElement.innerHTML += '<span>' + letter + '</span>';
}
let spanCount = 0;
let timer = setInterval(makeAnimation, 50);

function makeAnimation() {
    headerElement.children[spanCount].classList.add('animate');
    spanCount++;
    if (spanCount === headerElement.children.length) {
        clearInterval(timer);
        timer = null;
    }

}

/* End Animated Header */

/* Start Header And Navbar */
const menuIcon = document.querySelector('#header .menu-icon');
const closeMenuIcon = document.querySelector('#side-navbar .close-menu-icon');
menuIcon.addEventListener('click', () => {
    showNavbar();
});
closeMenuIcon.addEventListener('click', () => {
    hideNavbar();
});

function showNavbar() {
    const nav = document.getElementById('side-navbar');
    nav.style.transform = 'translateX(350px)';
}

function hideNavbar() {
    const nav = document.getElementById('side-navbar');
    nav.style.transform = 'translateX(0)';
}

/* End Header And Navbar */

/* Start Navbar */
const ourServicesDropdown = document.querySelector('#side-navbar ul li.dropdown');
ourServicesDropdown.addEventListener('focusin', () => {
    const iconElement = document.querySelector('#side-navbar ul li.dropdown .title i');
    iconElement.style.transform = 'rotate(90deg)';
    ourServicesDropdown.children[1].setAttributeNode(document.createAttribute('visible'));
});
ourServicesDropdown.addEventListener('focusout', () => {
    const iconElement = document.querySelector('#side-navbar ul li.dropdown .title i');
    iconElement.style.transform = 'rotate(0)';
    ourServicesDropdown.children[1].removeAttribute('visible');
})
/* End Navbar */

/* Start Images Section */
const images = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1629884688134-2d664d1840cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        caption: 'Caption One!'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1517042244917-7498ac155a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        caption: 'Caption Tow!'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1653446886570-a056ae4170c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        caption: 'Caption Three!'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1598992647737-7f1fb55c6456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        caption: 'Caption Four!'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1612607198686-6bd0f67ab073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        caption: 'Caption Five!'
    },

];
const carouselItem = document.querySelector('#images-section .carousel-item');
const leftArrow = carouselItem.children[0];
const imageContainer = carouselItem.children[1];
const rightArrow = carouselItem.children[2];
const number = imageContainer.children[0];
const image = imageContainer.children[1];
const caption = imageContainer.children[2];
let count = 0;
number.textContent = (count + 1).toString() + '/' + images.length;
image.setAttribute('src', images[0].imageUrl);
caption.textContent = images[0].caption;
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', previousImage);

function nextImage() {
    count += 1;
    if (count === images.length) {
        count = 0;
    }
    setImageAttributes(count);
}

function previousImage() {
    count -= 1;
    if (count < 0) {
        count = images.length - 1;
    }
    setImageAttributes(count);
}

function setImageAttributes(count) {
    number.textContent = (count + 1).toString() + '/' + images.length;
    image.setAttribute('src', images[count].imageUrl);
    caption.textContent = images[count].caption;
}

/* End Images Section */

/* Start Footer */
function sendFeedback() {
    const msg = document.querySelector('#feedback-text');
    if (msg.value === undefined || msg.value.toString() === '') {
        alert('You must enter some text first.');
        return;
    }
    window.open('mailto:osama.assaf.y@gmail.com?subject=Feedback&body=' + msg.value.toString());
}

/* End Footer */

/* Start Back To Top Button */
const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        scrollToTopBtn.setAttributeNode(document.createAttribute('visible'));
        return;
    }
    scrollToTopBtn.removeAttribute('visible');
}

scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
/* End Back To Top Button */




