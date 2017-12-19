'use strict';

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById('perspective');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
var container = document.getElementById('perspective');

var perspective = new PerspectiveSquare(canvas, [width * .4, height * .4], Math.min(width, height) * .2);

perspective.lineColor = '#111'; //dark grey
perspective.background = '#CCB255'; //gold

container.addEventListener('mousemove', function (event) {
  return perspective.drawSquare([event.offsetX, event.offsetY]);
});