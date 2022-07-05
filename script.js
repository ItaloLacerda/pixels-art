window.onload = function() {
    let colorPaletter = document.getElementById('color-palette');
    let pixelBoard = document.getElementById('pixel-board');

    //criando 4 divs como filhos do elemento colorPaletter com a classe color
    for (let counter = 0; counter < 4; counter += 1) {
        squareMaker('div', colorPaletter, 'color');

    }
    //atribui cores a paleta
    paletteColor(colorPaletter)

    //cria quadro com 25 pixels de cor branca
    for (let counter = 0; counter < 25; counter += 1) {
        squareMaker('div', pixelBoard, 'pixel');

    }
 
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