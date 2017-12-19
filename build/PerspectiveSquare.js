'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerspectiveSquare = function () {
    function PerspectiveSquare(canvas, leftTopCorner, boxWidth) {
        _classCallCheck(this, PerspectiveSquare);

        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._originalSquare = [leftTopCorner, [leftTopCorner[0] + boxWidth, leftTopCorner[1]], [leftTopCorner[0] + boxWidth, leftTopCorner[1] + boxWidth], [leftTopCorner[0], leftTopCorner[1] + boxWidth]];
        this._squareCenter = [leftTopCorner[0] + boxWidth / 2, leftTopCorner[1] + boxWidth / 2];
        //Deep copy
        this._square = this._originalSquare.map(function (point) {
            return point.slice();
        });

        //Public attributes
        this.depth = 100; //Depth of perspective
        this.lineColor = 'black';
        this.background = 'white';
        this.lineWeight = 3;
        this.maxSquareDisplacement = 60; //Max front square moves away from the vanishPoint.
    }

    _createClass(PerspectiveSquare, [{
        key: 'drawSquare',
        value: function drawSquare(vanishPoint) {
            var _this = this;

            var canvasWidth = this._canvas.width;
            var canvasHeight = this._canvas.height;
            this._context.clearRect(0, 0, canvasWidth, canvasHeight, this.background);
            this._context.fillStyle = this.background;
            this._context.fillRect(0, 0, canvasWidth, canvasHeight);
            this._context.lineWidth = this.lineWeight;

            //Move square
            var displacementVector = [0, 0];
            var squareDisplacement = Math.min(this._euclideanDistance(this._squareCenter, vanishPoint), this.maxSquareDisplacement);

            displacementVector = this._distanceDownLine(this._squareCenter, vanishPoint, squareDisplacement);
            displacementVector[0] -= this._squareCenter[0];
            displacementVector[1] -= this._squareCenter[1];

            for (var i = 0; i < 4; i++) {
                this._square[i][0] = this._originalSquare[i][0] - displacementVector[0];
                this._square[i][1] = this._originalSquare[i][1] - displacementVector[1];
            }

            /*---- Calculate second square -----*/
            var secondSquare = [];
            if (this._euclideanDistance(vanishPoint, this._square[0]) < this.depth) {
                for (var _i = 0; _i < 4; _i++) {
                    secondSquare.push(vanishPoint);
                }
            } else {
                secondSquare.push(this._distanceDownLine(this._square[0], vanishPoint, this.depth));
                secondSquare.push([this._calculateIntersection(this._square[1], vanishPoint, true, secondSquare[0][1]), secondSquare[0][1]]);
                secondSquare.push([secondSquare[1][0], this._calculateIntersection(this._square[2], vanishPoint, false, secondSquare[1][0])]);
                secondSquare.push([this._calculateIntersection(this._square[3], vanishPoint, true, secondSquare[2][1]), secondSquare[2][1]]);

                //Draw second square
                this._context.beginPath();
                this._context.moveTo(secondSquare[secondSquare.length - 1][0], secondSquare[secondSquare.length - 1][1]);
                secondSquare.forEach(function (point) {
                    return _this._context.lineTo(point[0], point[1]);
                });
                this._context.stroke();
                this._context.closePath();
            }
            this._square.forEach(function (point, index) {
                //I'm not sure what this first part does.
                _this._context.beginPath();
                _this._context.moveTo(point[0], point[1]);
                _this._context.lineTo(secondSquare[index][0], secondSquare[index][1]);
                _this._context.stroke();
                _this._context.closePath();

                //Draw dash lines to second square
                _this._context.beginPath();
                _this._context.moveTo(secondSquare[index][0], secondSquare[index][1]);
                _this._context.setLineDash([0, 4, _this.lineWeight, 4]);
                _this._context.lineTo(vanishPoint[0], vanishPoint[1]);
                _this._context.stroke();
                _this._context.closePath();
                _this._context.setLineDash([]);
            });
            //Draw first square
            this._drawSquareOnContext();
        }
    }, {
        key: '_drawSquareOnContext',
        value: function _drawSquareOnContext() {
            var _this2 = this;

            this._context.beginPath();
            this._context.moveTo(this._square[this._square.length - 1][0], this._square[this._square.length - 1][1]);
            this._square.forEach(function (point) {
                return _this2._context.lineTo(point[0], point[1]);
            });
            this._context.stroke();
            this._context.closePath;
        }
    }, {
        key: '_calculateIntersection',
        value: function _calculateIntersection(pointA, pointB, horizontal, intLine) {
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
    }, {
        key: '_distanceDownLine',
        value: function _distanceDownLine(pointA, pointB, distance) {
            /* Returns a point the given distance down the line specified */

            //Similar triangles
            var A = pointB[1] - pointA[1];
            var B = pointB[0] - pointA[0];
            var C = this._euclideanDistance(pointA, pointB);

            var x = B - B * (C - distance) / C;
            var y = A - A * (C - distance) / C;

            return [pointA[0] + x, pointA[1] + y];
        }
    }, {
        key: '_euclideanDistance',
        value: function _euclideanDistance(pointA, pointB) {
            //sqrt(a^2+b^2)
            return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
        }
    }]);

    return PerspectiveSquare;
}();