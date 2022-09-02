

const buttons = document.querySelectorAll('.container .buttons button');
const resultString = document.querySelector('.result');
const equationString = document.querySelector('.equation');

buttons[0].addEventListener('click',() => {
    equationString.textContent = '';
    resultString.textContent = '';
});
buttons[1].addEventListener('click',() => {
    if(resultString.textContent !== ''){
        if(equationString.textContent === ''){
            equationString.textContent = resultString.textContent;
            resultString.textContent = '';
        }
    }
    equationString.textContent = equationString.textContent.slice(0, -1);
});
buttons[2].addEventListener('click',() => {
    if(equationString.textContent === ''){
        return;
    }
    if(equationString.textContent[equationString.textContent.length - 1] === '.'){
        resultString.textContent = equationString.textContent + '0' + buttons[2].textContent;
        equationString.textContent = '';
        return;
    }
    resultString.textContent = equationString.textContent + buttons[2].textContent;
    equationString.textContent = '';
});
buttons[6].addEventListener('click',() => {
    if(equationString.textContent === ''){
        return;
    }if(equationString.textContent[equationString.textContent.length - 1] === '.'){
        resultString.textContent = equationString.textContent + '0' + buttons[6].textContent;
        equationString.textContent = '';
        return;
    }
    resultString.textContent = equationString.textContent + buttons[6].textContent;
    equationString.textContent = '';
});
buttons[10].addEventListener('click',() => {
    if(equationString.textContent === ''){
        return;
    }if(equationString.textContent[equationString.textContent.length - 1] === '.'){
        resultString.textContent = equationString.textContent + '0' + buttons[10].textContent;
        equationString.textContent = '';
        return;
    }
    resultString.textContent = equationString.textContent + buttons[10].textContent;
    equationString.textContent = '';
});
buttons[14].addEventListener('click',() => {
    if(equationString.textContent[equationString.textContent.length - 1] === '-'){
        return;
    }
    if(equationString.textContent === ''){
        equationString.textContent = buttons[14].textContent;
        return;
    }
    if(equationString.textContent[equationString.textContent.length - 1] === '.'){
        resultString.textContent = equationString.textContent + '0' + buttons[14].textContent;
        equationString.textContent = '';
        return;
    }
    resultString.textContent = equationString.textContent + buttons[14].textContent;
    equationString.textContent = '';
});
buttons[17].addEventListener('click',() => {
    let str =resultString.textContent + equationString.textContent;
    str = str.replaceAll('÷','/');
    if(isNaN(Number.parseInt(str[str.length - 1]))){
        str = str.slice(0, -1);
    }
    const result = eval(str);
    resultString.textContent = '';
    equationString.textContent = result;
});
for(let btn of buttons){
    if(btn.textContent === '.'){
        btn.addEventListener('click',() => {
            if(equationString.textContent[equationString.textContent.length - 1] === '.'){
                return;
            }
            equationString.textContent += btn.textContent;
        });
    }
    if(!isNaN(Number.parseInt(btn.textContent))){
        btn.addEventListener('click',() => {
            equationString.textContent += btn.textContent;
        });
    }
}


