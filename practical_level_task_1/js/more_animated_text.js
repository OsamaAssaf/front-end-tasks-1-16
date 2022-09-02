"use strict";


const texts = document.querySelectorAll('.animation-1 > span');



let i = 0;

setInterval(onTick,1000);

function onTick(){

    if(i === 0){
        texts[texts.length-1].classList.remove('animate');
    }else {
        texts[i-1].classList.remove('animate');
    }
    texts[i].classList.add('animate');
    i++;
    if(i === texts.length){
        i = 0;
    }
}