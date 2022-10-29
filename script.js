const body = document.querySelector('body');
const gridContainer = body.querySelector('.grid-container');

function createDivs(){
    for(let i = 0; i < 256; i ++){
        const div = document.createElement('div');
        div.classList.add('grid-item')
        div.textContent = i;
        gridContainer.appendChild(div);
    };
};

createDivs();

let gridItems = gridContainer.querySelectorAll('.grid-item');

function colorDiv(e){
    this.classList.add('color');
};

gridItems.forEach( item => item.addEventListener('mouseover',colorDiv));