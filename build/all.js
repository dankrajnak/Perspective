'use strict';

var width = window.innerWidth;
var height = window.innerHeight;
var radius = 40;
var margins = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

d3.select('svg').attr('width', width / 3);

//DRAW THE DIAGRAM
var container = d3.select('#container');
var canvas = d3.select('body').append('canvas').attr('width', width).attr('height', height);
var context = canvas.node().getContext('2d');

var up = void 0,
    bottom = void 0,
    left = void 0,
    right = void 0;

if (width > height) {
    up = height * 3 / 8;
    bottom = height * 5 / 8;
    left = (width - (bottom - up)) / 2;
    right = left + (bottom - up);
} else {
    left = width * 3 / 8;
    right = width * 5 / 8;
    up = (height - (right - left)) / 2;
    bottom = up + (right - left);
}

var originalSquare = [[left, up], [right, up], [right, bottom], [left, bottom]];
var square = [];
//Deep copy
originalSquare.forEach(function (point) {
    square.push(point.slice());
});
console.log(originalSquare);

var depth = 60;
var maxSquareDisplacement = 60;
var lineColor = '#CCB255';
var background = '#111';
var lineWidth = 3;

container.on('mousemove', function () {
    var mouse = d3.mouse(this);
    context.clearRect(0, 0, width, height, background);
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;

    //Move square
    var centerOfSquare = [(left + right) / 2, (up + bottom) / 2];
    var displacementVector = [0, 0];
    var squareDisplacement = maxSquareDisplacement;

    if (euclideanDistance(centerOfSquare, mouse) < maxSquareDisplacement) {
        squareDisplacement = euclideanDistance(centerOfSquare, mouse);
    }
    displacementVector = distanceDownLine(centerOfSquare, mouse, squareDisplacement);
    displacementVector[0] -= centerOfSquare[0];
    displacementVector[1] -= centerOfSquare[1];

    for (var i = 0; i < 4; i++) {
        square[i][0] = originalSquare[i][0] - displacementVector[0];
        square[i][1] = originalSquare[i][1] - displacementVector[1];
    }

    /*---- Calculate second square -----*/
    var secondSquare = [];
    if (euclideanDistance(mouse, square[0]) < depth) {
        for (var _i = 0; _i < 4; _i++) {
            secondSquare.push(mouse);
        }
    } else {
        secondSquare.push(distanceDownLine(square[0], mouse, depth));
        secondSquare.push([calculateIntersection(square[1], mouse, true, secondSquare[0][1]), secondSquare[0][1]]);
        secondSquare.push([secondSquare[1][0], calculateIntersection(square[2], mouse, false, secondSquare[1][0])]);
        secondSquare.push([calculateIntersection(square[3], mouse, true, secondSquare[2][1]), secondSquare[2][1]]);
        //Draw second square
        context.beginPath();
        context.moveTo(secondSquare[secondSquare.length - 1][0], secondSquare[secondSquare.length - 1][1]);
        secondSquare.forEach(function (point) {
            return context.lineTo(point[0], point[1]);
        });
        context.stroke();
        context.closePath;
    }
    square.forEach(function (point, index) {
        context.beginPath();
        context.moveTo(point[0], point[1]);
        context.lineTo(secondSquare[index][0], secondSquare[index][1]);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(secondSquare[index][0], secondSquare[index][1]);
        context.setLineDash([0, 4, lineWidth, 4]);
        context.lineTo(mouse[0], mouse[1]);
        context.stroke();
        context.closePath();
        context.setLineDash([]);
    });
    drawsquare();
});

function drawsquare() {
    context.beginPath();
    context.moveTo(square[square.length - 1][0], square[square.length - 1][1]);
    square.forEach(function (point) {
        return context.lineTo(point[0], point[1]);
    });
    context.stroke();
    context.closePath;
}

function distanceDownLine(pointA, pointB, distance) {
    /* Returns a point the given distance down the line specified */

    //Similar triangles
    var A = pointB[1] - pointA[1];
    var B = pointB[0] - pointA[0];
    var C = euclideanDistance(pointA, pointB);

    var x = B - B * (C - distance) / C;
    var y = A - A * (C - distance) / C;

    return [pointA[0] + x, pointA[1] + y];
}

function calculateIntersection(pointA, pointB, horizontal, intLine) {
    /* Calculates the intersection between a given line and a horizontal or vertical line. */

    if (horizontal) {
        //Using two points form of the line
        //x = (x2-x1)(y-y1)/(y2-y1)+x1
        return (pointB[0] - pointA[0]) * (intLine - pointA[1]) / (pointB[1] - pointA[1]) + pointA[0];
    } else {
        //Using two points form of the line
        //y = (y2 -y1)(x-x1)/(x2-x1)+y1
        return (pointB[1] - pointA[1]) * (intLine - pointA[0]) / (pointB[0] - pointA[0]) + pointA[1];
    }
}

function euclideanDistance(pointA, pointB) {
    //sqrt(a^2+b^2)
    return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
}