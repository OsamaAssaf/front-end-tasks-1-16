
const signUpButton = document.getElementById('sign-up-button');
const signInButton = document.getElementById('sign-in-button');
const container = document.querySelector('.container');

signUpButton.addEventListener('click',() => {
    container.classList.remove('sign-in-mode');
    container.classList.add('sign-up-mode');
});

signInButton.addEventListener('click',() => {
    container.classList.remove('sign-up-mode');
    container.classList.add('sign-in-mode');
});