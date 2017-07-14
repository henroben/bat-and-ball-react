webpackJsonp([1],{242:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=r(4),o=l(a),n=r(71),i=l(n),s=r(32),p=r(33),c=r(247),u=l(c),f=r(249),d=l(f);r(273),r(259),r(70);var b=(0,p.applyMiddleware)()(p.createStore);i.default.render(o.default.createElement(s.Provider,{store:b(d.default)},o.default.createElement(u.default,null)),document.querySelector(".container"))},243:function(e,t,r){r(253)},247:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return s({},e,{ball:e.ball,paddle:e.paddle,bricks:e.bricks})}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}}(),c=r(4),u=l(c),f=r(32),d=r(72),b=r(248),h=l(b),v=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={playArea:{width:800,height:600}},r}return n(t,e),p(t,[{key:"componentDidMount",value:function(){this.props.createBrickGrid(this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS),this.brickReset();setInterval(this.updateAll.bind(this),1e3/30)}},{key:"updateAll",value:function(){this.ballMove(),this.ballPaddleHandler()}},{key:"ballMove",value:function(){var e=this.props.ball.ballX,t=this.props.ball.ballY,r=this.props.ball.ballSpeedX,l=this.props.ball.ballSpeedY;e+=r,t+=l,e<0&&r<0&&(console.warn("hit left"),r*=-1),e>800&&r>0&&(console.warn("hit right"),r*=-1),t<0&&l<0&&(console.warn("hit top"),l*=-1),t>600&&l>0&&(console.warn("hit bottom"),l*=-1),this.props.ballMove({ballX:e,ballSpeedX:r,ballY:t,ballSpeedY:l})}},{key:"ballPaddleHandler",value:function(){if(this.state.playArea.height){var e=this.state.playArea.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,t=e+this.props.paddle.PADDLE_THICKNESS,r=this.props.paddle.paddleX,l=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH;if(this.props.ball.ballY+this.props.ball.ballSize>e&&this.props.ball.ballY+this.props.ball.ballSize<t&&this.props.ball.ballX+this.props.ball.ballSize>r&&this.props.ball.ballX+this.props.ball.ballSize<l){var a=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH/2,o=this.props.ball.ballX-a;this.props.ball.ballSpeedX=.35*o,this.props.ballMove({ballX:this.props.ball.ballX,ballSpeedX:this.props.ball.ballSpeedX=.35*o,ballY:this.props.ball.ballY,ballSpeedY:this.props.ball.ballSpeedY*=-1}),0===this.props.bricks.bricksLeft&&this.brickReset()}}}},{key:"brickReset",value:function(){var e=void 0,t=this.props.bricks.brickGrid;for(e=0;e<3*this.props.bricks.BRICK_COLS;e++)t[e]=!1;var r=0;for(e;e<this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS;e++)t[e]=!0,r++;this.props.updateBrickGrid(t)}},{key:"render",value:function(){return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-2"}),u.default.createElement("div",{className:"col-md-8"},u.default.createElement(h.default,{score:"0",lives:"0",ball:this.props.ball,paddle:this.props.paddle,playArea:this.state.playArea,bricks:this.props.bricks})),u.default.createElement("div",{className:"col-md-2"}))}}]),t}(c.Component);t.default=(0,f.connect)(i,{ballMove:d.ballMove,createBrickGrid:d.createBrickGrid,updateBrickGrid:d.updateBrickGrid})(v)},248:function(e,t,r){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e){return i({},e)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}}(),p=r(4),c=function(e){return e&&e.__esModule?e:{default:e}}(p),u=r(32),f=r(72),d=function(e){function t(e){l(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={x:0,y:0},r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){this.canvas.width=this.props.playArea.width,this.canvas.height=this.props.playArea.height,this.clearAndDraw()}},{key:"componentDidUpdate",value:function(){this.clearAndDraw()}},{key:"_onMouseMove",value:function(e){var t=(this.canvas.getContext("2d"),this.canvas.getBoundingClientRect()),r=document.documentElement;this.setState({x:e.clientX-t.left-r.scrollLeft,y:e.clientY-t.top-r.scrollTop}),this.props.updatePaddleX(e.clientX-t.left-r.scrollLeft-this.props.paddle.PADDLE_WIDTH/2)}},{key:"clearAndDraw",value:function(){var e=this.canvas.getContext("2d");this.canvas.getBoundingClientRect(),document.documentElement;e&&(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.colourRect(e,0,0,this.canvas.width,this.canvas.height,"#000000"),this.colourText(e,"Score: "+this.props.score,25,25,"#ffffff"),this.colourText(e,"Lives: "+this.props.lives,740,25,"#ffffff"),this.colourCircle(e,this.props.ball.ballX,this.props.ball.ballY,this.props.ball.ballSize,"#ffffff"),this.colourText(e,this.state.x+" , "+this.state.y,this.state.x+10,this.state.y+10,"yellow"),this.colourRect(e,this.props.paddle.paddleX,this.canvas.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,this.props.paddle.PADDLE_WIDTH,this.props.paddle.PADDLE_THICKNESS,"#ffffff"),this.drawBricks())}},{key:"rowColToArrayIndex",value:function(e,t){return e+this.props.bricks.BRICK_COLS*t}},{key:"drawBricks",value:function(){for(var e=this.canvas.getContext("2d"),t=0;t<this.props.bricks.BRICK_ROWS;t++)for(var r=0;r<this.props.bricks.BRICK_COLS;r++){var l=this.rowColToArrayIndex(r,t);this.props.bricks.brickGrid[l]&&this.colourRect(e,this.props.bricks.BRICK_W*r,this.props.bricks.BRICK_H*t,this.props.bricks.BRICK_W-this.props.bricks.BRICK_GAP,this.props.bricks.BRICK_H-this.props.bricks.BRICK_GAP,"green")}}},{key:"colourRect",value:function(e,t,r,l,a,o){e.fillStyle=o,e.fillRect(t,r,l,a)}},{key:"colourCircle",value:function(e,t,r,l,a){e.fillStyle=a,e.beginPath(),e.arc(this.props.ball.ballX,this.props.ball.ballY,l,0,2*Math.PI,!0),e.fill()}},{key:"colourText",value:function(e,t,r,l,a){e.fillStyle=a,e.fillText(t,r,l)}},{key:"render",value:function(){var e=this;return this.props.ball?c.default.createElement("div",null,c.default.createElement("canvas",{ref:function(t){return e.canvas=t},onMouseMove:this._onMouseMove.bind(this)})):c.default.createElement("div",null)}}]),t}(p.Component);t.default=(0,u.connect)(n,{updatePaddleX:f.updatePaddleX,ballMove:f.ballMove})(d)},249:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(33),o=r(250),n=l(o),i=r(252),s=l(i),p=r(251),c=l(p),u=(0,a.combineReducers)({ball:n.default,paddle:s.default,bricks:c.default});t.default=u},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];switch(t.type){case o.BALL_MOVE:return l({},e,{ballX:t.payload.ballX,ballSpeedX:t.payload.ballSpeedX,ballY:t.payload.ballY,ballSpeedY:t.payload.ballSpeedY});default:return e}};var a=r(34),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),n={ballX:75,ballSpeedX:5,ballY:75,ballSpeedY:7,ballSize:7}},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];switch(t.type){case o.CREATE_BRICK_GRID:case o.UPDATE_BRICK_GRID:return l({},e,{brickGrid:t.payload});default:return e}};var a=r(34),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),n={BRICK_W:80,BRICK_H:20,BRICK_GAP:2,BRICK_COLS:10,BRICK_ROWS:14,brickGrid:[],bricksLeft:0}},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];switch(t.type){case o.UPDATE_PADDLE_X:return l({},e,{paddleX:t.payload});default:return e}};var a=r(34),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),n={PADDLE_WIDTH:100,PADDLE_THICKNESS:10,PADDLE_DIST_FROM_EDGE:60,paddleX:400}},253:function(e,t,r){e.exports.css=r(260),e.exports.js=r(254)},254:function(e,t){},259:function(e,t){},260:function(e,t){},273:function(e,t,r){e.exports=r.p+"css/bootstrap.min.css"},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BALL_MOVE="BALL_MOVE",t.UPDATE_PADDLE_X="UPDATE_PADDLE_X",t.CREATE_BRICK_GRID="CREATE_BRICK_GRID",t.UPDATE_BRICK_GRID="UPDATE_BRICK_GRID"},408:function(e,t,r){r(242),r(70),e.exports=r(243)},70:function(e,t){},72:function(e,t,r){"use strict";function l(e){return{type:s.BALL_MOVE,payload:e}}function a(e){return{type:s.UPDATE_PADDLE_X,payload:e}}function o(e){var t=new Array(e);return{type:s.CREATE_BRICK_GRID,payload:t}}function n(e){return{type:s.UPDATE_BRICK_GRID,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ballMove=l,t.updatePaddleX=a,t.createBrickGrid=o,t.updateBrickGrid=n;var i=r(34),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i)}},[408]);