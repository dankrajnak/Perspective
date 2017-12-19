
let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById('perspective');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
const container = document.getElementById('perspective');


let perspective = new PerspectiveSquare(canvas, [width*.4, height*.4], Math.min(width, height)*.2);

perspective.lineColor = '#111'; //dark grey
perspective.background = '#CCB255'; //gold

container.addEventListener('mousemove', event => perspective.drawSquare([event.offsetX, event.offsetY]));