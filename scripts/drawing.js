define(["./gamelogic"], function(gamelogic) {
	var Draw = Draw || {};
	Draw.run = function() {
		this.width = gamelogic.Game.settings.boardWidth;
		this.height = gamelogic.Game.settings.boardHeight;
		this.dotSize = gamelogic.Game.settings.dotSize;

		var main = document.getElementById("main-snake");

		if (main.getContext) {
			this.ctx = main.getContext("2d");
			this.ctx.canvas.width = this.width * this.dotSize;
			this.ctx.canvas.height = this.height * this.dotSize;
			this.drawGrid(this.ctx);
			this.drawField(this.ctx);
		}
	}

	Draw.drawGrid = function(ctx) {
		ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
		//	horisontal lines
		ctx.beginPath();
		for (i = 0; i < this.width * this.dotSize; i++) {
			ctx.moveTo(i * this.dotSize, 0);
			ctx.lineTo(i * this.dotSize, this.height * this.dotSize);
		};
		ctx.stroke();
		//	vertical lines
		ctx.beginPath();
		for (i = 0; i < this.height * this.dotSize; i++) {
			ctx.moveTo(0, i * this.dotSize);
			ctx.lineTo(this.width * this.dotSize, i * this.dotSize);
		};
		ctx.stroke();
	}

	Draw.drawField = function(ctx) {
		var field = gamelogic.Game.field.body;
		for (i = 0; i < field.length; i++) {
			if (field[i] != 0) {
				var x = i % this.width; //	Converting linear coordinate to (x,y)
				var y = (i - x) / this.width;
				ctx.fillStyle = field[i];
				this.roundRect(ctx, x * this.dotSize, y * this.dotSize, this.dotSize, this.dotSize, this.dotSize / 4, true, true);
			}
		}
	}

	//	This function is drawing rectangle with rounded corners starting at (x,y)
	Draw.roundRect = function(ctx, x, y, width, height, radius, fill, stroke) {
		if (typeof stroke == "undefined") {
			stroke = true;
		}
		if (typeof radius === "undefined") {
			radius = 5;
		}
		if (typeof radius === "number") {
			radius = {
				tl: radius,
				tr: radius,
				br: radius,
				bl: radius,
			};
		} else {
			var defaultRadius = {
				tl: 0,
				tr: 0,
				br: 0,
				bl: 0,
			};
			for (var side in defaultRadius) {
				radius[side] = radius[side] || defaultRadius[side];
			}
		}
		ctx.beginPath();
		ctx.moveTo(x + radius.tl, y);
		ctx.lineTo(x + width - radius.tr, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
		ctx.lineTo(x + width, y + height - radius.br);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
		ctx.lineTo(x + radius.bl, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
		ctx.lineTo(x, y + radius.tl);
		ctx.quadraticCurveTo(x, y, x + radius.tl, y);
		ctx.closePath();
		if (fill) {
			ctx.fill();
		}
		if (stroke) {
			ctx.stroke();
		}
	}

	return {
		Draw: Draw
	}
});