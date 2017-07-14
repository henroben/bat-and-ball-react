webpackJsonp([1],{242:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=l(4),o=a(r),n=l(71),s=a(n),i=l(32),p=l(33),u=l(247),c=a(u),d=l(249),f=a(d);l(272),l(258),l(70);var b=(0,p.applyMiddleware)()(p.createStore);s.default.render(o.default.createElement(i.Provider,{store:b(f.default)},o.default.createElement(c.default,null)),document.querySelector(".container"))},243:function(e,t,l){l(252)},247:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return i({},e,{ball:e.ball,paddle:e.paddle})}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},p=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),u=l(4),c=a(u),d=l(32),f=l(72),b=l(248),h=a(b),v=function(e){function t(e){r(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={playArea:{width:800,height:600}},l}return n(t,e),p(t,[{key:"componentDidMount",value:function(){setInterval(this.updateAll.bind(this),1e3/30)}},{key:"updateAll",value:function(){this.ballMove(),this.ballPaddleHandler()}},{key:"ballMove",value:function(){var e=this.props.ball.ballX,t=this.props.ball.ballY,l=this.props.ball.ballSpeedX,a=this.props.ball.ballSpeedY;e+=l,t+=a,e<0&&l<0&&(console.warn("hit left"),l*=-1),e>800&&l>0&&(console.warn("hit right"),l*=-1),t<0&&a<0&&(console.warn("hit top"),a*=-1),t>600&&a>0&&(console.warn("hit bottom"),a*=-1),this.props.ballMove({ballX:e,ballSpeedX:l,ballY:t,ballSpeedY:a})}},{key:"ballPaddleHandler",value:function(){if(this.state.playArea.height){var e=this.state.playArea.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,t=e+this.props.paddle.PADDLE_THICKNESS,l=this.props.paddle.paddleX,a=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH;if(this.props.ball.ballY+this.props.ball.ballSize>e&&this.props.ball.ballY+this.props.ball.ballSize<t&&this.props.ball.ballX+this.props.ball.ballSize>l&&this.props.ball.ballX+this.props.ball.ballSize<a){var r=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH/2,o=this.props.ball.ballX-r;this.props.ball.ballSpeedX=.35*o,this.props.ballMove({ballX:this.props.ball.ballX,ballSpeedX:this.props.ball.ballSpeedX=.35*o,ballY:this.props.ball.ballY,ballSpeedY:this.props.ball.ballSpeedY*=-1})}}}},{key:"render",value:function(){return c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-2"}),c.default.createElement("div",{className:"col-md-8"},c.default.createElement(h.default,{score:"0",lives:"0",ball:this.props.ball,paddle:this.props.paddle,playArea:this.state.playArea})),c.default.createElement("div",{className:"col-md-2"}))}}]),t}(u.Component);t.default=(0,d.connect)(s,{ballMove:f.ballMove})(v)},248:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e){return s({},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},i=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),p=l(4),u=function(e){return e&&e.__esModule?e:{default:e}}(p),c=l(32),d=l(72),f=function(e){function t(e){a(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={x:0,y:0},l}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this.canvas.width=this.props.playArea.width,this.canvas.height=this.props.playArea.height,this.clearAndDraw()}},{key:"componentDidUpdate",value:function(){this.clearAndDraw()}},{key:"_onMouseMove",value:function(e){var t=(this.canvas.getContext("2d"),this.canvas.getBoundingClientRect()),l=document.documentElement;this.setState({x:e.clientX-t.left-l.scrollLeft,y:e.clientY-t.top-l.scrollTop}),this.props.updatePaddleX(e.clientX-t.left-l.scrollLeft-this.props.paddle.PADDLE_WIDTH/2)}},{key:"ballPaddleHandler",value:function(){var e=this.canvas.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,t=e+this.props.paddle.PADDLE_THICKNESS,l=this.state.paddleX,a=this.state.paddleX+this.props.paddle.PADDLE_WIDTH;if(this.props.ball.ballY+this.props.ball.ballSize>e&&this.props.ball.ballY+this.props.ball.ballSize<t&&this.props.ball.ballX+this.props.ball.ballSize>l&&this.props.ball.ballX+this.props.ball.ballSize<a){var r=this.props.paddle.paddleX+this.props.paddle.PADDLE_WIDTH/2,o=this.props.ball.ballX-r;this.props.ball.ballSpeedX=.35*o,this.props.ballMove({ballX:this.props.ball.ballX,ballSpeedX:this.props.ball.ballSpeedX=.35*o,ballY:this.props.ball.ballY,ballSpeedY:this.props.ball.ballSpeedY*=-1})}}},{key:"clearAndDraw",value:function(){var e=this.canvas.getContext("2d");this.canvas.getBoundingClientRect(),document.documentElement;e&&(e.clearRect(0,0,this.canvas.width,this.canvas.height),this.colourRect(e,0,0,this.canvas.width,this.canvas.height,"#000000"),this.colourText(e,"Score: "+this.props.score,25,25,"#ffffff"),this.colourText(e,"Lives: "+this.props.lives,740,25,"#ffffff"),this.colourCircle(e,this.props.ball.ballX,this.props.ball.ballY,this.props.ball.ballSize,"#ffffff"),this.colourText(e,this.state.x+" , "+this.state.y,this.state.x+10,this.state.y+10,"yellow"),this.colourRect(e,this.props.paddle.paddleX,this.canvas.height-this.props.paddle.PADDLE_DIST_FROM_EDGE,this.props.paddle.PADDLE_WIDTH,this.props.paddle.PADDLE_THICKNESS,"#ffffff"))}},{key:"colourRect",value:function(e,t,l,a,r,o){e.fillStyle=o,e.fillRect(t,l,a,r)}},{key:"colourCircle",value:function(e,t,l,a,r){e.fillStyle=r,e.beginPath(),e.arc(this.props.ball.ballX,this.props.ball.ballY,a,0,2*Math.PI,!0),e.fill()}},{key:"colourText",value:function(e,t,l,a,r){e.fillStyle=r,e.fillText(t,l,a)}},{key:"render",value:function(){var e=this;return this.props.ball?u.default.createElement("div",null,u.default.createElement("canvas",{ref:function(t){return e.canvas=t},onMouseMove:this._onMouseMove.bind(this)})):u.default.createElement("div",null)}}]),t}(p.Component);t.default=(0,c.connect)(n,{updatePaddleX:d.updatePaddleX,ballMove:d.ballMove})(f)},249:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(33),o=l(250),n=a(o),s=l(251),i=a(s),p=(0,r.combineReducers)({ball:n.default,paddle:i.default});t.default=p},250:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];switch(t.type){case o.BALL_MOVE:return a({},e,{ballX:t.payload.ballX,ballSpeedX:t.payload.ballSpeedX,ballY:t.payload.ballY,ballSpeedY:t.payload.ballSpeedY});default:return e}};var r=l(45),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(r),n={ballX:75,ballSpeedX:5,ballY:75,ballSpeedY:7,ballSize:7}},251:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments[1];switch(t.type){case o.UPDATE_PADDLE_X:return console.warn("paddle reducer",t),a({},e,{paddleX:t.payload});default:return e}};var r=l(45),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(r),n={PADDLE_WIDTH:100,PADDLE_THICKNESS:10,PADDLE_DIST_FROM_EDGE:60,paddleX:400}},252:function(e,t,l){e.exports.css=l(259),e.exports.js=l(253)},253:function(e,t){},258:function(e,t){},259:function(e,t){},272:function(e,t,l){e.exports=l.p+"css/bootstrap.min.css"},407:function(e,t,l){l(242),l(70),e.exports=l(243)},45:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BALL_MOVE="BALL_MOVE",t.UPDATE_PADDLE_X="UPDATE_PADDLE_X"},70:function(e,t){},72:function(e,t,l){"use strict";function a(e){return{type:n.BALL_MOVE,payload:e}}function r(e){return console.warn("updatePaddleX",e),{type:n.UPDATE_PADDLE_X,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ballMove=a,t.updatePaddleX=r;var o=l(45),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}(o)}},[407]);