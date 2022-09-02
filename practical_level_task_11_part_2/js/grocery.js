const greenColor = 'rgba(0,255,0,0.2)';
const redColor = 'rgba(255,0,0,0.2)';

const itemList = JSON.parse(localStorage.getItem("grocery") || '[]');
const itemListElement = document.querySelector('.card .items-container .item-list');
const form = document.querySelector('.card form');
const clearBtn = document.querySelector('.card .items-container .clear');

displayItemList(itemList);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    let inputValue = input.value;
    if (inputValue === '') {
        showToast('please enter value', redColor);
        return;
    }
    addItem(inputValue);
    input.value = '';
});

clearBtn.addEventListener('click', clearItems);

function displayItemList(itemList){
    if (itemList.length === 0) {
        clearBtn.style.display = 'none';
        itemListElement.innerHTML = '';
    } else {
        itemListElement.innerHTML = '';
        for (let i = 0; i < itemList.length; i++) {
            itemListElement.innerHTML += itemList[i].item;
        }
    }
}

function addItem(name) {
    const id = new Date().getTime();

    const nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.textContent = name;

    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('buttons');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit');
    editBtn.appendChild(editIcon);
    editBtn.addEventListener('click',() => {editItem(name);});

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash');
    removeBtn.appendChild(removeIcon);
    removeBtn.addEventListener('click',removeItem);

    btnsContainer.appendChild(editBtn);
    btnsContainer.appendChild(removeBtn);

    const item = document.createElement('div');
    item.classList.add('item');
    let attr = document.createAttribute("data-id");
    attr.value = id.toString();
    item.setAttributeNode(attr);
    item.appendChild(nameElement);
    item.appendChild(btnsContainer);
    itemListElement.appendChild(item);

    clearBtn.style.display = 'inline-block';

    addToLocalStorage(id, item);

    showToast('item add to the list',greenColor);
}


function addToLocalStorage(id, item) {
    const itemList = JSON.parse(localStorage.getItem("grocery") || '[]');
    itemList.push({
        id: id,
        item: item.outerHTML,
    });
    localStorage.setItem('grocery', JSON.stringify(itemList));
}

function removeItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    const itemList = JSON.parse(localStorage.getItem("grocery") || '[]');
    const index = itemList.findIndex(item => item.id === id);
    itemList.splice(index,1);
    localStorage.setItem('grocery', JSON.stringify(itemList));
    displayItemList(itemList);
    showToast('item removed',redColor);
}

function editItem(name){

    const input = form.querySelector('input');
    input.value = name;
}

function clearItems() {
    localStorage.removeItem('grocery');
    itemListElement.innerHTML = '';
    clearBtn.style.display = 'none';
    const input = form.querySelector('input');
    input.value = '';
    showToast('empty list', redColor);
}

function showToast(text, color) {
    const toast = document.querySelector('.card .toast');
    toast.style.backgroundColor = `${color}`;
    toast.textContent = text;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 1000)
}