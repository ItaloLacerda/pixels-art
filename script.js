window.onload = function () {
  const colorPaletter = document.getElementById('color-palette');
  const pixelBoard = document.getElementById('pixel-board');
  const clearBoard = document.getElementById('clear-board');
  const generateBoard = document.getElementById('generate-board');

  // criando 4 divs como filhos do elemento colorPaletter com a classe color
  for (let counter = 0; counter < 4; counter += 1) {
    squareMaker('div', colorPaletter, 'color');
  }

  // Captura elementos com classe color
  const squareColor = document.getElementsByClassName('color');

  // atribui cores a paleta
  paletteColor(colorPaletter);

  // atribui a classe "selected" ao primeiro filho de colorPaletter
  const classDiv0 = squareColor[0].classList;
  classDiv0.add('selected');

  // evento de click atribui a classe select ao elemento clicado
  squareColor[0].addEventListener('click', addClass);
  squareColor[1].addEventListener('click', addClass);
  squareColor[2].addEventListener('click', addClass);
  squareColor[3].addEventListener('click', addClass);

  // cria quadro com 25 pixels de cor branca
  for (let counter = 0; counter < 25; counter += 1) {
    squareMaker('div', pixelBoard, 'pixel');
  }

  // Atribui texto "limpar" ao Button
  clearBoard.innerText = 'Limpar';

  // Limpar SquarePixel
  clearBoard.addEventListener('click', clean);

  // Atribui Texto "VQV" ao generate-board

  generateBoard.innerText = 'VQV';

  generateBoard.addEventListener('click', inputPixel);

  // atribui cor de fundo ao elemento clicado
  function addColor(event) {
    const selectedSquare = document.getElementsByClassName('selected');

    event.target.style.backgroundColor = selectedSquare[0].style.backgroundColor;
  }

  // Captura elementos com classe pixel
  const squarePixel = document.getElementsByClassName('pixel');

  // evento de click atribui cor a pixel
  squarePixel[0].addEventListener('click', addColor);
  squarePixel[1].addEventListener('click', addColor);
  squarePixel[2].addEventListener('click', addColor);
  squarePixel[3].addEventListener('click', addColor);
  squarePixel[4].addEventListener('click', addColor);
  squarePixel[5].addEventListener('click', addColor);
  squarePixel[6].addEventListener('click', addColor);
  squarePixel[7].addEventListener('click', addColor);
  squarePixel[8].addEventListener('click', addColor);
  squarePixel[9].addEventListener('click', addColor);
  squarePixel[10].addEventListener('click', addColor);
  squarePixel[11].addEventListener('click', addColor);
  squarePixel[12].addEventListener('click', addColor);
  squarePixel[13].addEventListener('click', addColor);
  squarePixel[14].addEventListener('click', addColor);
  squarePixel[15].addEventListener('click', addColor);
  squarePixel[16].addEventListener('click', addColor);
  squarePixel[17].addEventListener('click', addColor);
  squarePixel[18].addEventListener('click', addColor);
  squarePixel[19].addEventListener('click', addColor);
  squarePixel[20].addEventListener('click', addColor);
  squarePixel[21].addEventListener('click', addColor);
  squarePixel[22].addEventListener('click', addColor);
  squarePixel[23].addEventListener('click', addColor);
  squarePixel[24].addEventListener('click', addColor);
};

// Cria um elemento e atribui ao pai adicionando uma classe caso necessario
function squareMaker(string, dad, className) {
  const child = document.createElement(string);
  child.className = className || '';
  dad.appendChild(child);
}

// Gera cores aleatorias

function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
}

// Atribui cor cor de fundo aos quadrados da paleta de cores
function paletteColor(DAD) {
  const dad = DAD;

  dad.children[0].style.backgroundColor = 'black';
  dad.children[1].style.backgroundColor = randomColor();
  dad.children[2].style.backgroundColor = randomColor();
  dad.children[3].style.backgroundColor = randomColor();
}

// atribui classe selected ao elemento clicado e remova das demais
function addClass(event) {
  const dad = document.getElementsByClassName('color');

  for (const element of dad) {
    element.className = 'color';
  }

  event.target.className = 'color selected';
}

function clean() {
  const square = document.getElementsByClassName('pixel');

  for (const squares of square) {
    squares.style.backgroundColor = 'white';
  }
}

// Destroi todos os pixes e verifica se o input é valido para criar novos inputs
function inputPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');

  pixelBoard.innerText = '';

  if (input.value < 1) {
    alert('Board inválido!');
  }

  pixelLimit(input.value);
}

// Verifica o valo do input e gera pixels
function pixelLimit(value) {
  const pixelBoard = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');
  const inputs = input.value * input.value;

  if (value < 5) {
    for (let counter = 0; counter < 25; counter += 1) {
      squareMaker('div', pixelBoard, 'pixel');
    }
    return;
  }
  if (value > 50) {
    for (let counter = 0; counter < 2500; counter += 1) {
      squareMaker('div', pixelBoard, 'pixel');
    }
  } else {
    for (let counter = 0; counter < inputs; counter += 1) {
      squareMaker('div', pixelBoard, 'pixel');
    }
  }
}
