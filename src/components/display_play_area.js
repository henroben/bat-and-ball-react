import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePaddleX, ballMove } from './../actions';

class DisplayPlayArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: 400,
			y: 0
		};
	}

	componentDidMount() {
		this.canvas.width = this.props.playArea.width;
		this.canvas.height = this.props.playArea.height;

		document.addEventListener('keydown', this.keyPressed.bind(this));
		document.addEventListener('keyup', this.keyReleased.bind(this));

		this.clearAndDraw();
	}

	componentDidUpdate() {
		this.clearAndDraw();
	}

	// ===== Set up Mouse Handler =====

	_onMouseMove(e) {
		const ctx = this.canvas.getContext('2d');
		let rect = this.canvas.getBoundingClientRect(); // position on page of the canvas
		let root = document.documentElement;

		let posX;
		let posY;

		if (e.clientX && e.clientY) {
			// mouse
			posX = e.clientX;
			posY = e.clientY;
		} else if (e.targetTouches) {
			posX = Math.floor(e.targetTouches[0].clientX);
			posY = e.targetTouches[0].clientY;
		}

		posX = Math.floor(posX - rect.left - root.scrollLeft);

		this.setState({
			x: posX,
			y: posY - rect.top - root.scrollTop
		});
		this.props.updatePaddleX(posX - this.props.paddle.PADDLE_WIDTH / 2);
	}

	// set up key handler
	keyPressed(e) {
		if (e.keyCode === 37) {
			// left pressed
			this.setState({
				x: (this.state.x -= 6)
			});
			this.props.updatePaddleX((this.state.x -= 6));
		}
		if (e.keyCode === 39) {
			// right pressed
			this.setState({
				x: (this.state.x += 6)
			});
			this.props.updatePaddleX((this.state.x += 6));
		}
		e.preventDefault();
	}
	keyReleased(e) {
		e.preventDefault();
	}

	// ===== Clear and Draw the Play Area =====

	clearAndDraw() {
		const ctx = this.canvas.getContext('2d');
		let rect = this.canvas.getBoundingClientRect(); // position on page of the canvas
		let root = document.documentElement;

		if (ctx) {
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.colourRect(
				ctx,
				0,
				0,
				this.canvas.width,
				this.canvas.height,
				'#000000'
			);

			// draw score lives
			this.colourText(ctx, 'Score: ' + this.props.score, 25, 25, '#ffffff');
			this.colourText(ctx, 'Level: ' + this.props.level, 378, 25, '#ffffff');
			this.colourText(ctx, 'Lives: ' + this.props.lives, 725, 25, '#ffffff');

			// draw ball sprite
			this.colourCircle(
				ctx,
				this.props.ball.ballX,
				this.props.ball.ballY,
				this.props.ball.ballSize,
				'#ffffff'
			);

			// draw mouse co-ords
			// this.colourText(ctx, this.state.x + ' , ' + this.state.y, this.state.x + 10, this.state.y + 10, 'yellow');

			// draw paddle sprite
			this.colourRect(
				ctx,
				this.props.paddle.paddleX,
				this.canvas.height - this.props.paddle.PADDLE_DIST_FROM_EDGE,
				this.props.paddle.PADDLE_WIDTH,
				this.props.paddle.PADDLE_THICKNESS,
				'#ffffff',
				0
			);

			this.drawBricks();
		}
	}

	// ====== draw methods =====

	rowColToArrayIndex(col, row) {
		'use strict';
		return col + this.props.bricks.BRICK_COLS * row;
	}

	drawBricks() {
		const ctx = this.canvas.getContext('2d');
		let colours = [
			'red',
			'green',
			'yellow',
			'blue',
			'orange',
			'purple',
			'red',
			'green',
			'yellow',
			'blue',
			'orange',
			'purple',
			'red',
			'green',
			'yellow',
			'blue',
			'orange',
			'purple'
		];

		for (let eachRow = 0; eachRow < this.props.bricks.BRICK_ROWS; eachRow++) {
			for (let eachCol = 0; eachCol < this.props.bricks.BRICK_COLS; eachCol++) {
				var arrayIndex = this.rowColToArrayIndex(eachCol, eachRow);

				if (this.props.bricks.brickGrid[arrayIndex]) {
					this.colourRect(
						ctx,
						this.props.bricks.BRICK_W * eachCol,
						this.props.bricks.BRICK_H * eachRow,
						this.props.bricks.BRICK_W - this.props.bricks.BRICK_GAP,
						this.props.bricks.BRICK_H - this.props.bricks.BRICK_GAP,
						colours[this.props.game.level],
						eachRow / 10
					);
				} // end of is this brick here
			} // end of for each brick
		} // end of for each row
	}

	colourRect(
		ctx,
		topLeftX,
		topLeftY,
		boxWidth,
		boxHeight,
		fillColour,
		opacity
	) {
		// draw a rectangle to canvas
		ctx.save();
		ctx.globalAlpha = 1.6 - opacity;
		ctx.fillStyle = fillColour;
		ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight); // fill the canvas x/y: top, left, width, height
		ctx.restore();
	}

	colourCircle(ctx, centreX, centreY, radius, fillColour) {
		// draw circle to canvas
		ctx.fillStyle = fillColour;
		ctx.beginPath(); // start drawing shape
		ctx.arc(
			this.props.ball.ballX,
			this.props.ball.ballY,
			radius,
			0,
			Math.PI * 2,
			true
		); // x/y: centre, radius, draw from 0 all away round, clockwise
		ctx.fill();
	}

	colourText(ctx, showWords, textX, textY, fillColour) {
		ctx.fillStyle = fillColour;
		ctx.font = '14px Arial';
		ctx.fillText(showWords, textX, textY);
	}

	// ===== render the canvas =====

	render() {
		if (this.props.ball) {
			return (
				<div className="play-area">
					<canvas
						ref={canvas => (this.canvas = canvas)}
						onMouseMove={this._onMouseMove.bind(this)}
						onTouchMove={this._onMouseMove.bind(this)}
					/>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

export default connect(mapStateToProps, { updatePaddleX, ballMove })(
	DisplayPlayArea
);
