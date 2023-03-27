const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Initialiser les variables du jeu
let score = 0;
let lives = 6;
let isPlaying = false;
let squareSize = 50;
let squareSpeed = 1;
let squares = [];

// Ajouter des événements de souris pour faire glisser la barre
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);

let isDragging = false;
let mouseStartX;
let barStartX;
let barX = canvas.width / 2 - squareSize / 2;
let barY = canvas.height - squareSize;

function handleMouseDown(event) {
  if (isPlaying) {
    if (event.clientY > barY) {
      isDragging = true;
      mouseStartX = event.clientX;
      barStartX = barX;
    }
  }
}

function handleMouseMove(event) {
  if (isDragging) {
    let deltaX = event.clientX - mouseStartX;
    barX = barStartX + deltaX;
    if (barX < 0) {
      barX = 0;
    } else if (barX + squareSize > canvas.width) {
      barX = canvas.width - squareSize;
    }
  }
}

function handleMouseUp() {
  isDragging = false;
}

// Fonction pour dessiner la barre
function drawBar() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(barX, barY, squareSize, squareSize);
}

// Fonction pour dessiner les carrés
function drawSquares() {
  ctx.fillStyle = 'red';
  for (let i = 0; i < squares.length; i++) {
    ctx.fillRect(squares[i].x, squares[i].y, squareSize, square
