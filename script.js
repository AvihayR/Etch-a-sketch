const body = document.querySelector('body');
const gridContainer = body.querySelector('.grid-container')

function createDivs(){
    for(let i = 0; i < 256; i ++){
        const div = document.createElement('div');
        div.classList.add('grid-item')
        div.textContent = i;
        gridContainer.appendChild(div)
        if( i % 16 == 0){
            let br = document.createElement('div')
            br.classList.add(".block-break")
            gridContainer.appendChild(br);
            console.log('16');
        };
    };
};

createDivs();