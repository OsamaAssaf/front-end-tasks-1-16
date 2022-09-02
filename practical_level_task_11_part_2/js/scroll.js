
const navbar = document.querySelector('#home nav');
const navToggleBtn = navbar.querySelector('.nav-header .nav-toggle');
const links = document.querySelector('.links');
const topLink = document.querySelector('.top-link');

navToggleBtn.addEventListener('click',() => {
    const classList = links.classList;
    classList.toggle('show');
});

window.addEventListener('resize',() => {
    if(window.innerWidth >= 800){
        links.classList.remove('show');
    }
});


window.addEventListener('scroll',() => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navbar.classList.add('stick');
    }else{
        navbar.classList.remove('stick');
    }
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        topLink.classList.add('show');
    }else{
        topLink.classList.remove('show');
    }
});

const date = document.getElementById('date');
date.textContent = new Date().getFullYear().toString();


/* smooth scroll */


const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function (link){
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = links.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('stick');
        let position = element.offsetTop-navHeight;
        if(containerHeight === 140){
            if(!fixedNav){
                position = position - navHeight + containerHeight;
            }else{
                position = position + containerHeight;
            }

        }
        window.scrollTo({
            left:0,
            top:position,
        });
        links.classList.remove('show');
        console.log(containerHeight);
    })
});

