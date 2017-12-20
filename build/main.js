'use strict';

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById('perspective');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

var perspective = new PerspectiveSquare(canvas, [width * .4, height * .4], Math.min(width, height) * .2);

perspective.lineColor = '#111'; //dark grey
perspective.background = '#CCB255'; //gold

var wanderer = new Wanderer(width, height);
wanderer.startWandering(function (pos) {
  return perspective.drawSquare(pos);
}, 2000, 500);

canvas.addEventListener('mouseover', function (event) {
  return wanderer.stopWandering(true);
});
canvas.addEventListener('mousemove', function (event) {
  return perspective.drawSquare([event.offsetX, event.offsetY]);
});
canvas.addEventListener('mouseout', function (event) {
  return wanderer.startWandering(function (pos) {
    return perspective.drawSquare(pos);
  }, 2000, 500, [event.offsetX, event.offsetY]);
});