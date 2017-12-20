"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wanderer = function () {
    function Wanderer(width, height) {
        _classCallCheck(this, Wanderer);

        this.width = width;
        this.height = height;
        this._pos = [Math.random() * width, Math.random() * height];
        this._FRAME_RATE = 33;
        this._wanderToFromStart = null;
        this._animationFrame;
        this._wandering = false;
        this._alpha = 3; //Parameter of easing function
    }

    _createClass(Wanderer, [{
        key: "startWandering",
        value: function startWandering(callBack, time) {
            var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [Math.random() * this.width, Math.random() * this.height];

            this._wandering = true;
            this.wanderToFrom([Math.random() * this.width, Math.random() * this.height], from, time, callBack);
        }
    }, {
        key: "stopWandering",
        value: function stopWandering() {
            var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this._wandering = false;
            if (immediately) {
                window.cancelAnimationFrame(this._animationFrame);
                this._wanderToFromStart = null;
            }
        }
    }, {
        key: "wanderToFrom",
        value: function wanderToFrom(to, from, time, callback) {
            var _this = this;

            this._alpha = Math.random() * 4 + 1 | 0; //Randomly pick new alpha for easing function
            this._animationFrame = window.requestAnimationFrame(function (timeStep) {
                return _this._step(to, from, time, callback, timeStep);
            });
        }
    }, {
        key: "_step",
        value: function _step(to, from, totalTime, callback, timeStep) {
            var _this2 = this;

            if (!this._wanderToFromStart) this._wanderToFromStart = timeStep;

            var progress = timeStep - this._wanderToFromStart;
            var newPosition = this._interpolate(to, from, Math.min(1, progress / totalTime));
            callback(newPosition);
            if (progress < totalTime) this._animationFrame = window.requestAnimationFrame(function (newTimeStep) {
                return _this2._step(to, newPosition, totalTime, callback, newTimeStep);
            });else {
                this._wanderToFromStart = null;
                //If wandering, wander from this point to a new one
                if (this._wandering) this.wanderToFrom([Math.random() * width, Math.random() * height], newPosition, totalTime, callback);
            }
        }
    }, {
        key: "_interpolate",
        value: function _interpolate(to, from, t) {
            var totalDistance = this._euclideanDistance(to, from);
            return this._distanceDownLine(from, to, totalDistance * this._easeInOut(t));
        }
    }, {
        key: "_easeInOut",
        value: function _easeInOut(t) {
            //easing function = t^a/(t^a+(1-t)^a).
            return Math.pow(t, this._alpha) / (Math.pow(t, this._alpha) + Math.pow(1 - t, this._alpha));
        }
    }, {
        key: "_distanceDownLine",
        value: function _distanceDownLine(pointA, pointB, distance) {
            /* Returns a point the given distance down the line specified */

            //Similar triangles
            var A = pointB[1] - pointA[1];
            var B = pointB[0] - pointA[0];
            if (A == 0 && B == 0) return pointA;
            var C = this._euclideanDistance(pointA, pointB);

            var x = B - B * (C - distance) / C;
            var y = A - A * (C - distance) / C;

            return [pointA[0] + x, pointA[1] + y];
        }
    }, {
        key: "_euclideanDistance",
        value: function _euclideanDistance(pointA, pointB) {
            //sqrt(a^2+b^2)
            return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
        }
    }]);

    return Wanderer;
}();