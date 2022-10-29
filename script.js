const body = document.querySelector('body');
const gridContainer = body.querySelector('.grid-container');

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


const btnContainer = body.querySelector('.btn-container');
const customBtn = btnContainer.querySelector('.custom-btn');

function createCustomDivs(){
    let num = prompt('Enter a single number of desired Columns, e.g "16" ');
    if (num >= 101 || num == NaN){
        alert('Error, input is not a number or number is exceeding 100.')
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