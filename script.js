window.onload = function() {
    let colorPaletter = document.getElementById('color-palette');
    let pixelBoard = document.getElementById('pixel-board');

    //criando 4 divs como filhos do elemento colorPaletter com a classe color
    for (let counter = 0; counter < 4; counter += 1) {
        squareMaker('div', colorPaletter, 'color');

    }

    //Captura elementos com classe color
    let squareColor = document.getElementsByClassName('color');

    //atribui cores a paleta
    paletteColor(colorPaletter)

    //atribui a classe "selected" ao primeiro filho de colorPaletter
    let classDiv0 = squareColor[0].classList;
    classDiv0.add('selected')

    //evento de click atribui a classe select ao elemento clicado
    squareColor[0].addEventListener('click', addClass);
    squareColor[1].addEventListener('click', addClass);
    squareColor[2].addEventListener('click', addClass);
    squareColor[3].addEventListener('click', addClass);

    //cria quadro com 25 pixels de cor branca
    for (let counter = 0; counter < 25; counter += 1) {
        squareMaker('div', pixelBoard, 'pixel');

    }

    let squarePixel = document.getElementsByClassName('pixel');

    squarePixel[0].addEventListener('click', addColor)
    squarePixel[1].addEventListener('click', addColor)
    squarePixel[2].addEventListener('click', addColor)
    squarePixel[3].addEventListener('click', addColor)
    squarePixel[4].addEventListener('click', addColor)
    squarePixel[5].addEventListener('click', addColor)
    squarePixel[6].addEventListener('click', addColor)
    squarePixel[7].addEventListener('click', addColor)
    squarePixel[8].addEventListener('click', addColor)
    squarePixel[9].addEventListener('click', addColor)
    squarePixel[10].addEventListener('click', addColor)
    squarePixel[11].addEventListener('click', addColor)
    squarePixel[12].addEventListener('click', addColor)
    squarePixel[13].addEventListener('click', addColor)
    squarePixel[14].addEventListener('click', addColor)
    squarePixel[15].addEventListener('click', addColor)
    squarePixel[16].addEventListener('click', addColor)
    squarePixel[17].addEventListener('click', addColor)
    squarePixel[18].addEventListener('click', addColor)
    squarePixel[19].addEventListener('click', addColor)
    squarePixel[20].addEventListener('click', addColor)
    squarePixel[21].addEventListener('click', addColor)
    squarePixel[22].addEventListener('click', addColor)
    squarePixel[23].addEventListener('click', addColor)
    squarePixel[24].addEventListener('click', addColor)
    

};

//Cria um elemento e atribui ao pai adicionando uma classe caso necessario
function squareMaker (string, dad, className) {
    let child = document.createElement(string)
    child.className = className || "";
    dad.appendChild(child);

}

//Atribui cor cor de fundo aos quadrados da paleta de cores
function paletteColor (dad) {
    dad.children[0].style.backgroundColor = 'black'
    dad.children[1].style.backgroundColor = 'red'
    dad.children[2].style.backgroundColor = 'blue'
    dad.children[3].style.backgroundColor = 'green'
}

//atribui classe selected ao elemento clicado e remova das demais
function addClass (event) {
    let dad = document.getElementsByClassName('color');
    
    for (let element of dad) {
        element.className = 'color'
    }
    
    event.target.className = 'color selected';   
}

function addColor(event) {
    let selectedSquare = document.getElementsByClassName('selected')
    
    event.target.style.backgroundColor = selectedSquare[0].style.backgroundColor;
}

