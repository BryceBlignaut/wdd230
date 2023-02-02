const chapterInput = document.querySelector('#favchap');
const addButton = document.querySelector('main button');
const chapterList = document.querySelector('#list');

// Create a click event listener for the Add Chapter

addButton.addEventListener('click', ()=> {
    
    if (chapterInput.value == ""){
        return;
    }

    let newlistitem = document.createElement('li');

    let deletebutton = document.createElement('button');

    newlistitem.textContent = chapterInput.value;

    deletebutton.textContent = "X";

    newlistitem.appendChild(deletebutton);
    
    chapterList.appendChild(newlistitem);

    deletebutton.addEventListener('click', () =>{
        newlistitem.remove()
    });

    chapterInput.focus();

    chapterInput.value=""

});