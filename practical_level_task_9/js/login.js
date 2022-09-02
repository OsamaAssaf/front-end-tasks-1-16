

const signUpInsteadBtn = document.getElementById('sign-up-instead');
const signInInsteadBtn = document.getElementById('sign-in-instead');

signUpInsteadBtn.addEventListener('click',() => {
    let item = document.getElementById('login-section');
    item.classList.remove('sign-in-mode');
    item.classList.add('sign-up-mode');

});
signInInsteadBtn.addEventListener('click',() => {
    let item = document.getElementById('login-section');
    item.classList.remove('sign-up-mode');
    item.classList.add('sign-in-mode');
});

const loginForm = document.querySelector('#login-section form');


