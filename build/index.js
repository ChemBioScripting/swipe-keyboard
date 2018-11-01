/*!
 * 
 *   swipe-keyboard v1.1.3
 *   https://github.com/hodgef/swipe-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.SimpleKeyboardSwipe=n():e.SimpleKeyboardSwipe=n()}(this,function(){return function(e){function __webpack_require__(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t.exports}var n={};return __webpack_require__.m=e,__webpack_require__.c=n,__webpack_require__.d=function(exports,e,n){__webpack_require__.o(exports,e)||Object.defineProperty(exports,e,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,"a",n),n},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,exports,n){e.exports=n(1)},function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(2);n.default=t.a},function(e,n,a){"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var t=a(3),s=(a.n(t),a(4)),o=function SimpleKeyboardSwipe(){_classCallCheck(this,SimpleKeyboardSwipe),this.init=function(e){e.registerModule("swipe",function(n){n.initVars=function(){var a=e.keyboardDOMClass;e.keyboardDOM=document.querySelector("."+a),n.canvasW=e.keyboardDOM.offsetWidth,n.canvasH=e.keyboardDOM.offsetHeight,n.isMouseClicked=!1,n.isMouseInCanvas=!1,n.prevX=0,n.currX=0,n.prevY=0,n.currY=0,n.lastButton="",n.swipeTolerance=30,n.stoppedTime=50,n.repeatResetTime=200},n.initEvents=function(){n.canvasHandler.canvas.addEventListener("mousemove",function(e){n.onMouseMove(e)},!1),n.canvasHandler.canvas.addEventListener("mousedown",function(e){n.onMouseDown(e)},!1),n.canvasHandler.canvas.addEventListener("mouseup",function(e){n.onMouseUp()},!1),n.canvasHandler.canvas.addEventListener("mouseout",function(e){n.onMouseOut()},!1),n.canvasHandler.canvas.addEventListener("mouseenter",function(e){n.onMouseEnter(e)},!1),document.addEventListener("touchstart",n.touchHandler,!0),document.addEventListener("touchmove",n.touchHandler,!0),document.addEventListener("touchend",n.touchHandler,!0),document.addEventListener("touchcancel",n.touchHandler,!0)},n.onMouseDown=function(e){n.swipeStart=!0,n.isMouseClicked=!0,n.isMouseInCanvas=!0,n.updateCurrentPosition(e),n.canvasHandler.canvas.classList.add("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseup"),n.isMouseHold=!0,n.holdTimeout=setTimeout(function(){n.isMouseHold&&n.handleInteraction(e),clearTimeout(n.holdTimeout)},500)},n.onMouseUp=function(){n.isMouseHold=!1,n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseClicked=!1,n.canvasHandler.canvas.classList.add("swipe-mouseup"),n.canvasHandler.canvas.classList.remove("swipe-mousedown"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseEnter=function(e){n.swipeStart=!1,n.isMouseClicked=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!0,n.canvasHandler.canvas.classList.add("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mouseout")},n.onMouseOut=function(){n.swipeStart=!1,n.canvasHandler.clear(),n.isMouseInCanvas=!1,n.canvasHandler.canvas.classList.add("swipe-mouseout"),n.canvasHandler.canvas.classList.remove("swipe-mouseenter"),n.canvasHandler.canvas.classList.remove("swipe-mousemove")},n.onMouseMove=function(e){n.isMouseHold=!1,n.isMouseClicked&&n.isMouseInCanvas&&(clearTimeout(n.mouseStopped),n.mouseStopped=!1,n.updateCurrentPosition(e),n.canvasHandler.draw(n.prevX,n.prevY,n.currX,n.currY),n.mouseStopped=setTimeout(function(){n.mouseStopped=!0,n.handleInteraction(e)},n.stoppedTime)),n.canvasHandler.canvas.classList.add("swipe-mousemove")},n.updateCurrentPosition=function(e){var a=n.canvasHandler.canvas.getBoundingClientRect();n.prevX=n.currX,n.prevY=n.currY,n.currX=e.clientX-a.left,n.currY=e.clientY-a.top,n.getMouseDirection(e)},n.getMouseDirection=function(e){var a=void 0,t=void 0;n.enforceTolerance(n.prevX,n.currX)&&(a=n.prevX<n.currX?"right":"left"),n.enforceTolerance(n.prevX,n.currX)&&(t=n.prevY<n.currY?"down":"up"),t===n.yDirection&&a===n.xDirection||(a&&(n.xDirection=a),t&&(n.yDirection=t),n.swipeStart&&(n.handleInteraction(e),n.swipeStart=!1))},n.handleInteraction=function(e){n.canvasHandler.canvas.style.display="none";var a=document.elementFromPoint(e.clientX,e.clientY);if(a){var t=a.getAttribute("data-skbtn");if(t&&(n.lastButton!==t||n.isMouseHold)&&a.onclick)if(!n.isMouseHold||(t.includes("{")||t.includes("}"))&&"{bksp}"!==t&&"{space}"!==t){clearTimeout(n.holdInteractionTimeout),a.onclick(),n.lastButton=t;var s=setTimeout(function(){clearTimeout(s),n.lastButton=""},n.repeatResetTime)}else n.holdInteractionTimeout=setTimeout(function(){a.onclick(),n.handleInteraction(e)},100);n.canvasHandler.canvas.style.display="block"}},n.enforceTolerance=function(e,a,t){t=t||n.swipeTolerance;var s=Math.abs(e-a);return s>t||0===s},n.throttle=function(e,n){var a=!1;a||(e(),a=!0,setTimeout(function(){a=!1},n))},n.touchHandler=function(e){var a=e.changedTouches,t=a[0],s="";switch(e.type){case"touchstart":s="mousedown";break;case"touchmove":s="mousemove";break;case"touchend":s="mouseup";break;default:return}var o=document.createEvent("MouseEvent");o.initMouseEvent(s,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),n.canvasHandler.canvas.dispatchEvent(o),e.preventDefault()},n.canvasHandler=new s.a,n.initVars(),n.canvasHandler.init(e.keyboardDOM,n.canvasW,n.canvasH),n.initEvents()})}};n.a=o},function(e,exports){},function(e,n,a){"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var t=function Canvas(){var e=this;_classCallCheck(this,Canvas),this.init=function(n,a,t){e.canvasW=a,e.canvasH=t;var s=document.createElement("canvas");s.className="swipeCanvasElement",s.width=a,s.height=t,n.insertAdjacentElement("beforebegin",s),e.canvas=document.querySelector(".swipeCanvasElement"),e.ctx=e.canvas.getContext("2d")},this.clear=function(){e.ctx.clearRect(0,0,e.canvasW,e.canvasH)},this.draw=function(n,a,t,s){e.ctx.beginPath(),e.ctx.moveTo(n,a),e.ctx.lineTo(t,s),e.ctx.strokeStyle="rgba(10, 103, 115, 0.9)",e.ctx.lineWidth=3,e.ctx.stroke(),e.ctx.closePath()}};n.a=t}])});
//# sourceMappingURL=index.js.map