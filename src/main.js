
let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById('perspective');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

let perspective = new PerspectiveSquare(canvas, [width*.4, height*.4], Math.min(width, height)*.2);

perspective.lineColor = '#111'; //dark grey
perspective.background = '#CCB255'; //gold

let wanderer = new Wanderer(width, height);
wanderer.startWandering((pos) => perspective.drawSquare(pos), 2000, 500);

canvas.addEventListener('mouseover', event=> wanderer.stopWandering(true));
canvas.addEventListener('mousemove', event => perspective.drawSquare([event.offsetX, event.offsetY]));
canvas.addEventListener('mouseout', event => wanderer.startWandering(pos=>perspective.drawSquare(pos), 2000, 500, [event.offsetX, event.offsetY]));
