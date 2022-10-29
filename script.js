const body = document.querySelector('body');
const gridContainer = body.querySelector('.grid-container');
const btnContainer = body.querySelector('.btn-container');
const customBtn = btnContainer.querySelector('.custom-btn');
const resetBtn = btnContainer.querySelector('.reset');

function createDivs(){
    for(let i = 0; i < 256; i ++){
        const div = document.createElement('div');
        div.classList.add('grid-item')
        div.textContent = i;
        gridContainer.appendChild(div);
        //gridContainer.style = "grid-template-columns: repeat(6,1fr)"
    };
};

createDivs();

let gridItems = gridContainer.querySelectorAll('.grid-item');

function colorDiv(e){
    this.classList.add('color');
};

gridItems.forEach( item => item.addEventListener('mouseover',colorDiv));

function resetColor(){
    gridItems.forEach(item => item.classList.remove('color'));
}

function createCustomDivs(){
    let num = prompt('Enter a single number of desired Columns, up to a maximum of 100. ');
    if (num >= 101 || isNaN(num) || num<0){
        alert('Error, input is not a number or number is exceeding 100.');
        return;
    };


    gridContainer.replaceChildren();

        for(let i = 0; i<num*num; i++){
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.textContent = i;
            gridContainer.appendChild(div);
            gridContainer.style = `grid-template-columns: repeat(${num},1fr)`;
        };
        let gridItems = gridContainer.querySelectorAll('.grid-item');
        gridItems.forEach(item => item.addEventListener('mouseover',colorDiv))
};

customBtn.addEventListener('click',createCustomDivs);
resetBtn.addEventListener('click',resetColor);