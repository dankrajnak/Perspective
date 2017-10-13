let width = window.innerWidth;
let height = window.innerHeight;
const radius = 40;
const margins = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

d3.select('svg').attr('width', width / 3);



//DRAW THE DIAGRAM
const container = d3.select('#container');
const canvas = d3.select('body').append('canvas').attr('width', width).attr('height', height);
const context = canvas.node().getContext('2d');

let up, bottom, left, right;

if (width > height) {
    up = height * 3 / 8;
    bottom = height * 5 / 8;
    left = (width - (bottom - up)) / 2
    right = left + (bottom - up);
} else {
    left = width * 3 / 8;
    right = width * 5 / 8;
    up = (height - (right - left)) / 2;
    bottom = up + (right - left);
}

let rectangle = [[left, up], [right, up], [right, bottom], [left, bottom]];

const simpleDistance = 60;
const lineColor = '#CCB255';
const background = '#111';
const lineWidth = 3

container.on('mousemove', function(){
    let mouse = d3.mouse(this);
    context.clearRect(0,0,width,height, background);
    context.fillStyle = background
    context.fillRect(0,0, width, height);
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    /*---- Calculate second square -----*/
    let secondSquare = [];
    secondSquare.push(distanceDownLine(rectangle[0], mouse, simpleDistance));
    secondSquare.push([calculateIntersection(rectangle[1], mouse, true, secondSquare[0][1]), secondSquare[0][1]]);
    secondSquare.push([secondSquare[1][0], calculateIntersection(rectangle[2], mouse, false, secondSquare[1][0])]);
    secondSquare.push([calculateIntersection(rectangle[3], mouse, true, secondSquare[2][1]), secondSquare[2][1]])
    
    //Draw second square
    context.beginPath();
        context.moveTo(secondSquare[secondSquare.length - 1][0], secondSquare[secondSquare.length - 1][1])
        secondSquare.forEach((point) => context.lineTo(point[0], point[1]));
        context.stroke();
    context.closePath;
         

    rectangle.forEach((point, index)=>{
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
        context.setLineDash([])
    })
    drawRectangle()
});

function drawRectangle(){
    context.beginPath();
        context.moveTo(rectangle[rectangle.length - 1][0], rectangle[rectangle.length - 1][1])
        rectangle.forEach((point) => context.lineTo(point[0], point[1]));
        context.stroke();
    context.closePath;
}

function distanceDownLine(pointA, pointB, distance){
    /* Returns a point the given distance down the line specified */
    
    //Similar triangles
    const A = pointB[1] - pointA[1];
    const B = pointB[0] - pointA[0];
    const C = euclideanDistance(pointA, pointB);
    
    const x = B - B*(C - distance)/C;
    const y = A - A*(C - distance)/C;
    
    return [pointA[0]+x, pointA[1]+y];
}

function calculateIntersection(pointA, pointB, horizontal, intLine){
    /* Calculates the intersection between a given line and a horizontal or vertical line. */
    
    if(horizontal){
        //Using two points form of the line
        //x = (x2-x1)(y-y1)/(y2-y1)+x1
        return (pointB[0]-pointA[0])*(intLine-pointA[1])/(pointB[1]-pointA[1])+pointA[0]
        
    } else{
        //Using two points form of the line
        //y = (y2 -y1)(x-x1)/(x2-x1)+y1
        return (pointB[1]-pointA[1])*(intLine-pointA[0])/(pointB[0]-pointA[0])+pointA[1]
    }  
}

function euclideanDistance(pointA, pointB){
    //sqrt(a^2+b^2)
    return Math.sqrt(Math.pow(pointA[0]-pointB[0], 2) + Math.pow(pointA[1]-pointB[1], 2));
}




