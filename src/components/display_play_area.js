import React, { Component } from 'react';

export default class DisplayPlayArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        };
    }

    _onMouseMove(e) {
        const ctx = this.canvas.getContext('2d');
        let rect = this.canvas.getBoundingClientRect(); // position on page of the canvas
        let root = document.documentElement;

        this.setState({ x: e.clientX - rect.left - root.scrollLeft, y: e.clientY - rect.top - root.scrollTop });
    }

    componentDidMount() {
        this.canvas.width = 800;
        this.canvas.height = 600;

        this.clearAndDraw();
    }

    componentDidUpdate() {
        this.clearAndDraw();
    }

    clearAndDraw() {

        const ctx = this.canvas.getContext('2d');
        let rect = this.canvas.getBoundingClientRect(); // position on page of the canvas
        let root = document.documentElement;
        if (ctx) {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.colourRect(ctx, 0,0, this.canvas.width,this.canvas.height, '#000000');

            // draw score lives
            this.colourText(ctx, 'Score: ' + this.props.score, 25, 25, '#ffffff');
            this.colourText(ctx, 'Lives: ' + this.props.lives, 740, 25, '#ffffff');

            // draw ball sprite
            this.colourCircle(ctx, this.props.ball.ballX, this.props.ball.ballY, this.props.ball.ballSize, '#ffffff');

            // draw mouse co-ords
            this.colourText(ctx, this.state.x + ' , ' + this.state.y, this.state.x + 10, this.state.y + 10, 'yellow');
        }
    }

    colourRect(ctx, topLeftX,topLeftY, boxWidth,boxHeight, fillColour) {
        // draw a rectangle to canvas
        ctx.fillStyle = fillColour;
        ctx.fillRect(topLeftX,topLeftY, boxWidth,boxHeight); // fill the canvas x/y: top, left, width, height
    }

    colourCircle(ctx, centreX,centreY, radius, fillColour) {
        // draw circle to canvas
        ctx.fillStyle = fillColour;
        ctx.beginPath(); // start drawing shape
        ctx.arc(this.props.ball.ballX,this.props.ball.ballY, radius, 0, Math.PI * 2, true); // x/y: centre, radius, draw from 0 all away round, clockwise
        ctx.fill();
    }

    colourText(ctx, showWords, textX, textY, fillColour) {
        ctx.fillStyle = fillColour;
        ctx.fillText(showWords, textX, textY);
    }

    render() {
        return (
            <div>
                <canvas ref={canvas => this.canvas = canvas} onMouseMove={this._onMouseMove.bind(this)} />
            </div>
        );
    }
}
