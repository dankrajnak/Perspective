/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),w.push((o?"":"no-")+a.join("-"))}}function i(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,s,u,f,d="modernizr",c=a("div"),p=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:d+(r+1),c.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,o,i){function s(){u&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var u,d,c,h,v,A=["modernizr","tspan","samp"];!N.style&&A.length;)u=!0,N.modElem=a(A.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(h=e[d],v=N.style[h],f(h,"-")&&(h=m(h)),N.style[h]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return s(),"pfx"==t?h:!0}return s(),!1}function v(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?v(o,n||t):o);return!1}function g(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,i):(a=(e+" "+T.join(s+" ")+s).split(" "),A(a,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var C=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var w=[],S=t.documentElement,x="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",T=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=T;var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=E;var P;!function(){var e={}.hasOwnProperty;P=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=s});var k=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();b.hasEvent=k;var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=z;var B=function(e,t){var n=!1,r=a("div"),o=r.style;if(e in o){var i=T.length;for(o[e]=t,n=o[e];i--&&!n;)o[e]="-"+T[i]+"-"+t,n=o[e]}return""===n&&(n=!1),n};b.prefixedCSSValue=B;var O=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=O;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});var N={style:L.elem.style};Modernizr._q.unshift(function(){delete N.style}),b.testAllProps=g,b.testAllProps=y;b.testProp=function(e,t,r){return h([e],n,t,r)},b.testStyles=u;Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("pointerevents",function(){var e=!1,t=T.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)k(T[t]+"pointerdown")&&(e=!0);return e}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var R=!1;try{R="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(j){}Modernizr.addTest("websockets",R),Modernizr.addTest("cssanimations",y("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addAsyncTest(function(){var e,t,n,r=a("img"),o="sizes"in r;!o&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){s("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):s("sizes",o)}),Modernizr.addTest("srcset","srcset"in a("img")),Modernizr.addTest("webworkers","Worker"in e),o(),i(w),delete b.addTest,delete b.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);
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