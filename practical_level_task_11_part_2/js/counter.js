let counterValue = document.querySelector('.counter .value');

const buttons = document.querySelectorAll('.counter .button-container button');
let count = 0;

for (let btn of buttons) {
    const classList = btn.classList;
    btn.addEventListener('click', () => {
        if (classList.contains('decrease')) {
            count--;
        } else if (classList.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if(count < 0){
            counterValue.style.color = '#FF0000';
        }else if(count > 0){
            counterValue.style.color = '#00FF00';
        }else{
            counterValue.style.color = '#222222';
        }
        counterValue.textContent = count;
    });
}