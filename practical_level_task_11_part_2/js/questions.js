

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const button = question.querySelector('.show-btn');
    button.addEventListener('click',() => {
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});








