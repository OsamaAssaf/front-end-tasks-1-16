
const imageList = document.querySelectorAll('.carousel li');

let currentImage = 0;

function nextImage(){
    for(let i = 0 ; i < imageList.length ; i++){
        if(imageList[i].id === 'current'){
            currentImage = i;
            imageList[i].id = '';
            break;
        }
    }
    if(currentImage + 1 === imageList.length){
        currentImage = -1;
    }
    imageList[currentImage + 1].id = 'current';
}

function prevImage(){
    for(let i = 0 ; i < imageList.length ; i++){
        if(imageList[i].id === 'current'){
            currentImage = i;
            imageList[i].id = '';
            break;
        }
    }if(currentImage - 1 === -1){
        currentImage = imageList.length - 1;
    }
    imageList[currentImage - 1].id = 'current';
}