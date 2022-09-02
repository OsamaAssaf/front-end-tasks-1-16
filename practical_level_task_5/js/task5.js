

const listButton = document.getElementById('list-btn');
const gridButton = document.getElementById('grid-btn');
const items = document.querySelectorAll('.item');

listButton.addEventListener('click',showListView);
gridButton.addEventListener('click',showGridView);

function showListView(){
    if(listButton.classList.contains('active')){
        return;
    }
    listButton.classList.add('active');
    gridButton.classList.remove('active');
    items.forEach((value) => {
        value.classList.remove('grid');
        value.classList.add('list');
    });
}
function showGridView(){
    if(gridButton.classList.contains('active')){
        return;
    }
    gridButton.classList.add('active');
    listButton.classList.remove('active');
    items.forEach((value) => {
        value.classList.remove('list');
        value.classList.add('grid');
    });

}

function changeItemsWidth(newWidth){
    items.forEach((value) => {
        value.style.width = newWidth;
    });
}