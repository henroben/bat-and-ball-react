webpackJsonp([1],{242:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=r(4),o=l(a),i=r(71),s=l(i),n=r(33),p=r(34),c=r(247),u=l(c),d=r(250),f=l(d);r(275),r(261),r(70);var h=(0,p.applyMiddleware)()(p.createStore);s.default.render(o.default.createElement(n.Provider,{store:h(f.default)},o.default.createElement(u.default,null)),document.querySelector(".container"))},243:function(e,t,r){r(255)},247:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return n({},e,{ball:e.ball,paddle:e.paddle,bricks:e.bricks,game:e.game})}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}}(),c=r(4),u=l(c),d=r(33),f=r(248),h=l(f),b=r(72),v=r(249),_=l(v),y=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={playArea:{width:800,height:600}},r}return i(t,e),p(t,[{key:"componentDidMount",value:function(){if("play"===this.props.game.gameState){this.props.createBrickGrid(this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS),this.brickReset(),this.resetBall();setInterval(this.updateAll.bind(this),1e3/30)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"updateAll",value:function(){this.ballMove(),this.ballBrickHandler(),this.ballPaddleHandler()}},{key:"ballMove",value:function(){var e=this.props.ball.ballX,t=this.props.ball.ballY,r=this.props.ball.ballSpeedX,l=this.props.ball.ballSpeedY;if(e+=r,t+=l,e<0&&r<0&&(r*=-1),e>800&&r>0&&(r*=-1),t<0&&l<0&&(l*=-1),t>this.state.playArea.height&&l>0)return this.props.game.lives>0?(this.resetBall(),void this.props.updateLives(this.props.game.lives-1)):(this.game("gameover"),this.props.game.score>this.props.game.highScore&&this.props.updateHighScore(this.props.game.score),void this.props.updateGameState("gameover"));this.props.ballMove({ballX:e,ballSpeedX:r,ballY:t,ballSpeedY:l})}},{key:"ballPaddleHandler",value:function(){if(this.state.playArea.height){var e=this.state.playArea.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,t=e+this.props.paddle.PADDLE_THICKNESS,r=this.props.paddle.paddleX,l=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH;if(this.props.ball.ballY+this.props.ball.ballSize>e&&this.props.ball.ballY+this.props.ball.ballSize<t&&this.props.ball.ballX+this.props.ball.ballSize>r&&this.props.ball.ballX+this.props.ball.ballSize<l){var a=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH/2,o=this.props.ball.ballX-a;this.props.ball.ballSpeedX=.35*o*(this.props.game.level/3),this.props.ballMove({ballX:this.props.ball.ballX,ballSpeedX:this.props.ball.ballSpeedX=.35*o*(this.props.game.level/3),ballY:this.props.ball.ballY,ballSpeedY:this.props.ball.ballSpeedY*=-1}),0===this.props.bricks.bricksLeft&&(this.props.updateLevel(this.props.game.level+1),this.props.game.level/3==1&&this.props.updateLives(this.props.game.lives+1),this.brickReset())}}}},{key:"resetBall",value:function(){this.props.ballMove({ballX:this.state.playArea.width/2,ballSpeedX:this.props.ball.ballSpeedX,ballY:this.state.playArea.height/2,ballSpeedY:this.props.ball.ballSpeedY})}},{key:"ballBrickHandler",value:function(){var e=Math.floor(this.props.ball.ballX/this.props.bricks.BRICK_W),t=Math.floor(this.props.ball.ballY/this.props.bricks.BRICK_H),r=this.rowColToArrayIndex(e,t);if(e>=0&&e<this.props.bricks.BRICK_COLS&&t>=0&&t<this.props.bricks.BRICK_ROWS&&this.isBrickAtColRow(e,t)){var l=this.props.bricks.brickGrid,a=this.props.bricks.bricksLeft,o=this.props.ball.ballSpeedX,i=this.props.ball.ballSpeedY;l[r]=!1,this.props.updateBrickGrid(l);var s=(50-t)*this.props.game.level;this.props.updateScore(this.props.game.score+s),a--,this.props.updateBricksLeft(a);var n=this.props.ball.ballX-this.props.ball.ballSpeedX,p=this.props.ball.ballY-this.props.ball.ballSpeedY,c=Math.floor(n/this.props.bricks.BRICK_W),u=Math.floor(p/this.props.bricks.BRICK_H),d=!0;c!=e&&!1===this.isBrickAtColRow(c,t)&&(o*=-1,d=!1),u!=t&&!1===this.isBrickAtColRow(e,u)&&(i*=-1,d=!1),d&&(o*=-1,i*=-1),this.props.ballMove({ballX:this.props.ball.ballX,ballY:this.props.ball.ballY,ballSpeedX:o,ballSpeedY:i})}}},{key:"rowColToArrayIndex",value:function(e,t){return e+this.props.bricks.BRICK_COLS*t}},{key:"isBrickAtColRow",value:function(e,t){if(e>=0&&e<this.props.bricks.BRICK_COLS&&t>=0&&t<this.props.bricks.BRICK_ROWS){var r=this.rowColToArrayIndex(e,t);return this.props.bricks.brickGrid[r]}return!1}},{key:"brickReset",value:function(){var e=void 0,t=this.props.bricks.brickGrid;for(e=0;e<3*this.props.bricks.BRICK_COLS;e++)t[e]=!1;var r=0;for(e;e<this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS;e++)t[e]=!0,r++;this.props.updateBrickGrid(t),this.props.updateBricksLeft(r)}},{key:"handleClick",value:function(e,t){this.props.updateGameState(e),"play"===e?this.game("play"):(e="intro")&&(this.props.updateLives(2),this.props.updateScore(0),this.props.updateLevel(1))}},{key:"game",value:function(e){if("play"===e){this.props.createBrickGrid(this.props.bricks.BRICK_COLS*this.props.bricks.BRICK_ROWS),this.brickReset(),this.resetBall();this.intervalId=setInterval(this.updateAll.bind(this),1e3/30)}else"gameover"===e&&clearInterval(this.intervalId)}},{key:"renderGameState",value:function(e){switch(e){case"intro":return u.default.createElement("div",null,u.default.createElement(h.default,{handleClick:this.handleClick.bind(this,"play")}));case"play":return u.default.createElement(_.default,{score:this.props.game.score,lives:this.props.game.lives,level:this.props.game.level,ball:this.props.ball,paddle:this.props.paddle,playArea:this.state.playArea,bricks:this.props.bricks});case"gameover":return u.default.createElement("div",null,u.default.createElement("h1",null,"GAME OVER!"),u.default.createElement("h1",null,"You Got To Level ",this.props.game.level),u.default.createElement("h1",null,"And Scored ",this.props.game.score," Points!"),u.default.createElement("h1",null,"Current High Score is ",this.props.game.highScore),u.default.createElement("button",{className:"btn btn-primary",onClick:this.handleClick.bind(this,"intro")},"TRY AGAIN"))}}},{key:"render",value:function(){return u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-2"}),u.default.createElement("div",{className:"col-md-8"},this.renderGameState(this.props.game.gameState)),u.default.createElement("div",{className:"col-md-2"}))}}]),t}(c.Component);t.default=(0,d.connect)(s,{ballMove:b.ballMove,createBrickGrid:b.createBrickGrid,updateBrickGrid:b.updateBrickGrid,updateBricksLeft:b.updateBricksLeft,updateScore:b.updateScore,updateHighScore:b.updateHighScore,updateLives:b.updateLives,updateGameState:b.updateGameState,updateLevel:b.updateLevel})(y)},248:function(e,t,r){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}}(),s=r(4),n=function(e){return e&&e.__esModule?e:{default:e}}(s),p=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"bat-and-ball-intro-screen"},n.default.createElement("h1",null,"BAT AND BALL!"),n.default.createElement("p",null,"The classic through the wall game. Use your mouse to bounce the ball up to the wall to remove the bricks and increase your score."),n.default.createElement("p",null,"You start with 3 lives, an extra life is awarded every 3 levels, but be careful, the ball gets faster as you progress further!"),n.default.createElement("button",{className:"btn btn-primary btn-block",onClick:this.props.handleClick},"CLICK TO PLAY"))}}]),t}(s.Component);t.default=p},249:function(e,t,r){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return s({},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var l=t[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}}(),p=r(4),c=function(e){return e&&e.__esModule?e:{default:e}}(p),u=r(33),d=r(72),f=function(e){function t(e){l(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={x:0,y:0},r}return o(t,e),n(t,[{key:"componentDidMount",value:function(){this.canvas.width=this.props.playArea.width,this.canvas.height=this.props.playArea.height,this.clearAndDraw()}},{key:"componentDidUpdate",value:function(){this.clearAndDraw()}},{key:"_onMouseMove",value:function(e){var t=(this.canvas.getContext("2d"),this.canvas.getBoundingClientRect()),r=document.documentElement;this.setState({x:e.clientX-t.left-r.scrollLeft,y:e.clientY-t.top-r.scrollTop}),this.props.updatePaddleX(e.clientX-t.left-r.scrollLeft-this.props.paddle.PADDLE_WIDTH/2)}},{key:"clearAndDraw",value:function(){var e=this.canvas.getContext("2d");this.canvas.getBoundingClientRect(),document.documentElement;e&&(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.colourRect(e,0,0,this.canvas.width,this.canvas.height,"#000000"),this.colourText(e,"Score: "+this.props.score,25,25,"#ffffff"),this.colourText(e,"Level: "+this.props.level,385,25,"#ffffff"),this.colourText(e,"Lives: "+this.props.lives,740,25,"#ffffff"),this.colourCircle(e,this.props.ball.ballX,this.props.ball.ballY,this.props.ball.ballSize,"#ffffff"),this.colourRect(e,this.props.paddle.paddleX,this.canvas.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,this.props.paddle.PADDLE_WIDTH,this.props.paddle.PADDLE_THICKNESS,"#ffffff",0),this.drawBricks())}},{key:"rowColToArrayIndex",value:function(e,t){return e+this.props.bricks.BRICK_COLS*t}},{key:"drawBricks",value:function(){for(var e=this.canvas.getContext("2d"),t=["red","green","yellow","blue","orange","purple","red","green","yellow","blue","orange","purple","red","green","yellow","blue","orange","purple"],r=0;r<this.props.bricks.BRICK_ROWS;r++)for(var l=0;l<this.props.bricks.BRICK_COLS;l++){var a=this.rowColToArrayIndex(l,r);this.props.bricks.brickGrid[a]&&this.colourRect(e,this.props.bricks.BRICK_W*l,this.props.bricks.BRICK_H*r,this.props.bricks.BRICK_W-this.props.bricks.BRICK_GAP,this.props.bricks.BRICK_H-this.props.bricks.BRICK_GAP,t[this.props.game.level],r/10)}}},{key:"colourRect",value:function(e,t,r,l,a,o,i){console.log("opacity",i),e.save(),e.globalAlpha=1.6-i,e.fillStyle=o,e.fillRect(t,r,l,a),e.restore()}},{key:"colourCircle",value:function(e,t,r,l,a){e.fillStyle=a,e.beginPath(),e.arc(this.props.ball.ballX,this.props.ball.ballY,l,0,2*Math.PI,!0),e.fill()}},{key:"colourText",value:function(e,t,r,l,a){e.fillStyle=a,e.fillText(t,r,l)}},{key:"render",value:function(){var e=this;return this.props.ball?c.default.createElement("div",null,c.default.createElement("h3",null,"Bat and Ball"),c.default.createElement("canvas",{ref:function(t){return e.canvas=t},onMouseMove:this._onMouseMove.bind(this)})):c.default.createElement("div",null)}}]),t}(p.Component);t.default=(0,u.connect)(i,{updatePaddleX:d.updatePaddleX,ballMove:d.ballMove})(f)},250:function(e,t,r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(34),o=r(251),i=l(o),s=r(254),n=l(s),p=r(252),c=l(p),u=r(253),d=l(u),f=(0,a.combineReducers)({ball:i.default,paddle:n.default,bricks:c.default,game:d.default});t.default=f},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.BALL_MOVE:return l({},e,{ballX:t.payload.ballX,ballSpeedX:t.payload.ballSpeedX,ballY:t.payload.ballY,ballSpeedY:t.payload.ballSpeedY});default:return e}};var a=r(27),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),i={ballX:75,ballSpeedX:5,ballY:75,ballSpeedY:7,ballSize:7}},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.CREATE_BRICK_GRID:case o.UPDATE_BRICK_GRID:return l({},e,{brickGrid:t.payload});case o.UPDATE_BRICKS_LEFT:return l({},e,{bricksLeft:t.payload});default:return e}};var a=r(27),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),i={BRICK_W:80,BRICK_H:20,BRICK_GAP:2,BRICK_COLS:10,BRICK_ROWS:13,brickGrid:[],bricksLeft:0}},253:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.UPDATE_SCORE:return l({},e,{score:t.payload});case o.UPDATE_HIGH_SCORE:return l({},e,{highScore:t.payload});case o.UPDATE_LIVES:return l({},e,{lives:t.payload});case o.UPDATE_LEVEL:return l({},e,{level:t.payload});case o.UPDATE_GAME_STATE:return l({},e,{gameState:t.payload});default:return e}};var a=r(27),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),i={score:0,lives:2,level:1,gameState:"intro",highScore:0}},254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.UPDATE_PADDLE_X:return l({},e,{paddleX:t.payload});default:return e}};var a=r(27),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),i={PADDLE_WIDTH:100,PADDLE_THICKNESS:10,PADDLE_DIST_FROM_EDGE:60,paddleX:400}},255:function(e,t,r){e.exports.css=r(262),e.exports.js=r(256)},256:function(e,t){},261:function(e,t){},262:function(e,t){},27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BALL_MOVE="BALL_MOVE",t.UPDATE_PADDLE_X="UPDATE_PADDLE_X",t.CREATE_BRICK_GRID="CREATE_BRICK_GRID",t.UPDATE_BRICK_GRID="UPDATE_BRICK_GRID",t.UPDATE_BRICKS_LEFT="UPDATE_BRICKS_LEFT",t.UPDATE_SCORE="UPDATE_SCORE",t.UPDATE_HIGH_SCORE="UPDATE_HIGH_SCORE",t.UPDATE_LIVES="UPDATE_LIVES",t.UPDATE_LEVEL="UPDATE_LEVEL",t.UPDATE_GAME_STATE="UPDATE_GAME_STATE"},275:function(e,t,r){e.exports=r.p+"css/bootstrap.min.css"},410:function(e,t,r){r(242),r(70),e.exports=r(243)},70:function(e,t){},72:function(e,t,r){"use strict";function l(e){return{type:h.BALL_MOVE,payload:e}}function a(e){return{type:h.UPDATE_PADDLE_X,payload:e}}function o(e){var t=new Array(e);return{type:h.CREATE_BRICK_GRID,payload:t}}function i(e){return{type:h.UPDATE_BRICK_GRID,payload:e}}function s(e){return{type:h.UPDATE_BRICKS_LEFT,payload:e}}function n(e){return{type:h.UPDATE_SCORE,payload:e}}function p(e){return{type:h.UPDATE_HIGH_SCORE,payload:e}}function c(e){return{type:h.UPDATE_LIVES,payload:e}}function u(e){return{type:h.UPDATE_LEVEL,payload:e}}function d(e){return{type:h.UPDATE_GAME_STATE,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ballMove=l,t.updatePaddleX=a,t.createBrickGrid=o,t.updateBrickGrid=i,t.updateBricksLeft=s,t.updateScore=n,t.updateHighScore=p,t.updateLives=c,t.updateLevel=u,t.updateGameState=d;var f=r(27),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(f)}},[410]);