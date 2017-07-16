webpackJsonp([1],{242:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=r(4),i=a(l),o=r(71),s=a(o),n=r(33),p=r(34),c=r(247),u=a(c),d=r(249),h=a(d);r(274),r(260),r(70);var f=(0,p.applyMiddleware)()(p.createStore);s.default.render(i.default.createElement(n.Provider,{store:f(h.default)},i.default.createElement(u.default,null)),document.querySelector(".container"))},243:function(e,t,r){r(254)},247:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return n({},e,{ball:e.ball,paddle:e.paddle,bricks:e.bricks,game:e.game})}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=r(4),u=a(c),d=r(33),h=r(72),f=r(248),b=a(f),v=function(e){function t(e){l(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={playArea:{width:800,height:600}},r}return o(t,e),p(t,[{key:"componentDidMount",value:function(){if("play"===this.props.game.gameState){this.props.createBrickGrid(this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS),this.brickReset(),this.resetBall();setInterval(this.updateAll.bind(this),1e3/30)}}},{key:"componentDidUpdate",value:function(){}},{key:"updateAll",value:function(){this.ballMove(),this.ballBrickHandler(),this.ballPaddleHandler()}},{key:"ballMove",value:function(){var e=this.props.ball.ballX,t=this.props.ball.ballY,r=this.props.ball.ballSpeedX,a=this.props.ball.ballSpeedY;if(e+=r,t+=a,e<0&&r<0&&(console.warn("hit left"),r*=-1),e>800&&r>0&&(console.warn("hit right"),r*=-1),t<0&&a<0&&(console.warn("hit top"),a*=-1),t>this.state.playArea.height&&a>0)return console.warn("hit bottom"),this.props.game.lives>0?(this.resetBall(),void this.props.updateLives(this.props.game.lives-1)):(console.warn("Game Over"),this.game("gameover"),void this.props.updateGameState("gameover"));this.props.ballMove({ballX:e,ballSpeedX:r,ballY:t,ballSpeedY:a})}},{key:"ballPaddleHandler",value:function(){if(this.state.playArea.height){var e=this.state.playArea.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,t=e+this.props.paddle.PADDLE_THICKNESS,r=this.props.paddle.paddleX,a=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH;if(this.props.ball.ballY+this.props.ball.ballSize>e&&this.props.ball.ballY+this.props.ball.ballSize<t&&this.props.ball.ballX+this.props.ball.ballSize>r&&this.props.ball.ballX+this.props.ball.ballSize<a){var l=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH/2,i=this.props.ball.ballX-l;this.props.ball.ballSpeedX=.35*i,this.props.ballMove({ballX:this.props.ball.ballX,ballSpeedX:this.props.ball.ballSpeedX=.35*i,ballY:this.props.ball.ballY,ballSpeedY:this.props.ball.ballSpeedY*=-1}),0===this.props.bricks.bricksLeft&&this.brickReset()}}}},{key:"resetBall",value:function(){this.props.ballMove({ballX:this.state.playArea.width/2,ballSpeedX:this.props.ball.ballSpeedX,ballY:this.state.playArea.height/2,ballSpeedY:this.props.ball.ballSpeedY})}},{key:"ballBrickHandler",value:function(){var e=Math.floor(this.props.ball.ballX/this.props.bricks.BRICK_W),t=Math.floor(this.props.ball.ballY/this.props.bricks.BRICK_H),r=this.rowColToArrayIndex(e,t);if(e>=0&&e<this.props.bricks.BRICK_COLS&&t>=0&&t<this.props.bricks.BRICK_ROWS&&this.isBrickAtColRow(e,t)){var a=this.props.bricks.brickGrid,l=this.props.bricks.bricksLeft,i=this.props.ball.ballSpeedX,o=this.props.ball.ballSpeedY;a[r]=!1,this.props.updateBrickGrid(a),this.props.updateScore(this.props.game.score+25),l--,this.props.updateBricksLeft(l);var s=this.props.ball.ballX-this.props.ball.ballSpeedX,n=this.props.ball.ballY-this.props.ball.ballSpeedY,p=Math.floor(s/this.props.bricks.BRICK_W),c=Math.floor(n/this.props.bricks.BRICK_H),u=!0;p!=e&&!1===this.isBrickAtColRow(p,t)&&(i*=-1,u=!1),c!=t&&!1===this.isBrickAtColRow(e,c)&&(o*=-1,u=!1),u&&(i*=-1,o*=-1),this.props.ballMove({ballX:this.props.ball.ballX,ballY:this.props.ball.ballY,ballSpeedX:i,ballSpeedY:o})}}},{key:"rowColToArrayIndex",value:function(e,t){return e+this.props.bricks.BRICK_COLS*t}},{key:"isBrickAtColRow",value:function(e,t){if(e>=0&&e<this.props.bricks.BRICK_COLS&&t>=0&&t<this.props.bricks.BRICK_ROWS){var r=this.rowColToArrayIndex(e,t);return this.props.bricks.brickGrid[r]}return!1}},{key:"brickReset",value:function(){var e=void 0,t=this.props.bricks.brickGrid;for(e=0;e<3*this.props.bricks.BRICK_COLS;e++)t[e]=!1;var r=0;for(e;e<this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS;e++)t[e]=!0,r++;this.props.updateBrickGrid(t)}},{key:"handleKeyUp",value:function(e,t){console.log("key up",e),this.props.updateGameState(t)}},{key:"handleClick",value:function(e,t){this.props.updateGameState(e),"play"===e?this.game("play"):(e="intro")&&(this.props.updateLives(3),this.props.updateScore(0))}},{key:"game",value:function(e){if("play"===e){this.props.createBrickGrid(this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS),this.brickReset(),this.resetBall();this.intervalId=setInterval(this.updateAll.bind(this),1e3/30),console.log("interval set",this.intervalId)}else"gameover"===e&&(console.log("interval cleared",this.intervalId),clearInterval(this.intervalId))}},{key:"renderGameState",value:function(e){switch(e){case"intro":return u.default.createElement("div",null,u.default.createElement("h1",{onKeyUp:this.handleKeyUp.bind(this,"play"),onClick:this.handleClick.bind(this,"play")},"Cick to start"));case"play":return u.default.createElement(b.default,{score:this.props.game.score,lives:this.props.game.lives,ball:this.props.ball,paddle:this.props.paddle,playArea:this.state.playArea,bricks:this.props.bricks});case"gameover":return u.default.createElement("div",null,u.default.createElement("h1",null,"GAME OVER!"),u.default.createElement("h1",null,"You Scored ",this.props.game.score),u.default.createElement("h1",{onKeyUp:this.handleKeyUp.bind(this,"intro"),onClick:this.handleClick.bind(this,"intro")},"Click to try again."))}}},{key:"render",value:function(){return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-2"}),u.default.createElement("div",{className:"col-md-8"},this.renderGameState(this.props.game.gameState)),u.default.createElement("div",{className:"col-md-2"}))}}]),t}(c.Component);t.default=(0,d.connect)(s,{ballMove:h.ballMove,createBrickGrid:h.createBrickGrid,updateBrickGrid:h.updateBrickGrid,updateBricksLeft:h.updateBricksLeft,updateScore:h.updateScore,updateLives:h.updateLives,updateGameState:h.updateGameState})(v)},248:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return s({},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),p=r(4),c=function(e){return e&&e.__esModule?e:{default:e}}(p),u=r(33),d=r(72),h=function(e){function t(e){a(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={x:0,y:0},r}return i(t,e),n(t,[{key:"componentDidMount",value:function(){this.canvas.width=this.props.playArea.width,this.canvas.height=this.props.playArea.height,this.clearAndDraw()}},{key:"componentDidUpdate",value:function(){this.clearAndDraw()}},{key:"_onMouseMove",value:function(e){var t=(this.canvas.getContext("2d"),this.canvas.getBoundingClientRect()),r=document.documentElement;this.setState({x:e.clientX-t.left-r.scrollLeft,y:e.clientY-t.top-r.scrollTop}),this.props.updatePaddleX(e.clientX-t.left-r.scrollLeft-this.props.paddle.PADDLE_WIDTH/2)}},{key:"clearAndDraw",value:function(){var e=this.canvas.getContext("2d");this.canvas.getBoundingClientRect(),document.documentElement;e&&(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.colourRect(e,0,0,this.canvas.width,this.canvas.height,"#000000"),this.colourText(e,"Score: "+this.props.score,25,25,"#ffffff"),this.colourText(e,"Lives: "+this.props.lives,740,25,"#ffffff"),this.colourCircle(e,this.props.ball.ballX,this.props.ball.ballY,this.props.ball.ballSize,"#ffffff"),this.colourRect(e,this.props.paddle.paddleX,this.canvas.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,this.props.paddle.PADDLE_WIDTH,this.props.paddle.PADDLE_THICKNESS,"#ffffff"),this.drawBricks())}},{key:"rowColToArrayIndex",value:function(e,t){return e+this.props.bricks.BRICK_COLS*t}},{key:"drawBricks",value:function(){for(var e=this.canvas.getContext("2d"),t=0;t<this.props.bricks.BRICK_ROWS;t++)for(var r=0;r<this.props.bricks.BRICK_COLS;r++){var a=this.rowColToArrayIndex(r,t);this.props.bricks.brickGrid[a]&&this.colourRect(e,this.props.bricks.BRICK_W*r,this.props.bricks.BRICK_H*t,this.props.bricks.BRICK_W-this.props.bricks.BRICK_GAP,this.props.bricks.BRICK_H-this.props.bricks.BRICK_GAP,"green")}}},{key:"colourRect",value:function(e,t,r,a,l,i){e.fillStyle=i,e.fillRect(t,r,a,l)}},{key:"colourCircle",value:function(e,t,r,a,l){e.fillStyle=l,e.beginPath(),e.arc(this.props.ball.ballX,this.props.ball.ballY,a,0,2*Math.PI,!0),e.fill()}},{key:"colourText",value:function(e,t,r,a,l){e.fillStyle=l,e.fillText(t,r,a)}},{key:"render",value:function(){var e=this;return this.props.ball?c.default.createElement("div",null,c.default.createElement("canvas",{ref:function(t){return e.canvas=t},onMouseMove:this._onMouseMove.bind(this)})):c.default.createElement("div",null)}}]),t}(p.Component);t.default=(0,u.connect)(o,{updatePaddleX:d.updatePaddleX,ballMove:d.ballMove})(h)},249:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(34),i=r(250),o=a(i),s=r(253),n=a(s),p=r(251),c=a(p),u=r(252),d=a(u),h=(0,l.combineReducers)({ball:o.default,paddle:n.default,bricks:c.default,game:d.default});t.default=h},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.BALL_MOVE:return a({},e,{ballX:t.payload.ballX,ballSpeedX:t.payload.ballSpeedX,ballY:t.payload.ballY,ballSpeedY:t.payload.ballSpeedY});default:return e}};var l=r(27),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),o={ballX:75,ballSpeedX:5,ballY:75,ballSpeedY:7,ballSize:7}},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.CREATE_BRICK_GRID:case i.UPDATE_BRICK_GRID:return a({},e,{brickGrid:t.payload});case i.UPDATE_BRICKS_LEFT:return a({},e,{bricksLeft:t.payload});default:return e}};var l=r(27),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),o={BRICK_W:80,BRICK_H:20,BRICK_GAP:2,BRICK_COLS:10,BRICK_ROWS:14,brickGrid:[],bricksLeft:0}},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.UPDATE_SCORE:return a({},e,{score:t.payload});case i.UPDATE_LIVES:return console.log("lives",t.payload),a({},e,{lives:t.payload});case i.UPDATE_GAME_STATE:return console.log("state",t.payload),a({},e,{gameState:t.payload});default:return e}};var l=r(27),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),o={score:0,lives:3,gameState:"intro"}},253:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.UPDATE_PADDLE_X:return a({},e,{paddleX:t.payload});default:return e}};var l=r(27),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),o={PADDLE_WIDTH:100,PADDLE_THICKNESS:10,PADDLE_DIST_FROM_EDGE:60,paddleX:400}},254:function(e,t,r){e.exports.css=r(261),e.exports.js=r(255)},255:function(e,t){},260:function(e,t){},261:function(e,t){},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BALL_MOVE="BALL_MOVE",t.UPDATE_PADDLE_X="UPDATE_PADDLE_X",t.CREATE_BRICK_GRID="CREATE_BRICK_GRID",t.UPDATE_BRICK_GRID="UPDATE_BRICK_GRID",t.UPDATE_BRICKS_LEFT="UPDATE_BRICKS_LEFT",t.UPDATE_SCORE="UPDATE_SCORE",t.UPDATE_LIVES="UPDATE_LIVES",t.UPDATE_GAME_STATE="UPDATE_GAME_STATE"},274:function(e,t,r){e.exports=r.p+"css/bootstrap.min.css"},409:function(e,t,r){r(242),r(70),e.exports=r(243)},70:function(e,t){},72:function(e,t,r){"use strict";function a(e){return{type:d.BALL_MOVE,payload:e}}function l(e){return{type:d.UPDATE_PADDLE_X,payload:e}}function i(e){var t=new Array(e);return{type:d.CREATE_BRICK_GRID,payload:t}}function o(e){return{type:d.UPDATE_BRICK_GRID,payload:e}}function s(e){return{type:d.UPDATE_BRICKS_LEFT,payload:e}}function n(e){return{type:d.UPDATE_SCORE,payload:e}}function p(e){return{type:d.UPDATE_LIVES,payload:e}}function c(e){return{type:d.UPDATE_GAME_STATE,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ballMove=a,t.updatePaddleX=l,t.createBrickGrid=i,t.updateBrickGrid=o,t.updateBricksLeft=s,t.updateScore=n,t.updateLives=p,t.updateGameState=c;var u=r(27),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(u)}},[409]);