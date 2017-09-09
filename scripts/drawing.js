define([], function() {

	function draw(field) {
		var main = document.getElementById("main-snake");
		var width = field.width;
		var height = field.height;
		var dotSize = field.dotSize;

		if (main.getContext) {
			var ctx = main.getContext("2d");
			ctx.canvas.width = width * dotSize;
			ctx.canvas.height = height * dotSize;
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, width * dotSize, height * dotSize);
			drawGrid(ctx);
			drawField(ctx);
		}

		function drawGrid(ctx) {
			ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
			//	horisontal lines
			ctx.beginPath();
			for (i = 0; i < width * dotSize; i++) {
				ctx.moveTo(i * dotSize, 0);
				ctx.lineTo(i * dotSize, height * dotSize);
			};
			ctx.stroke();
			//	vertical lines
			ctx.beginPath();
			for (i = 0; i < height * dotSize; i++) {
				ctx.moveTo(0, i * dotSize);
				ctx.lineTo(width * dotSize, i * dotSize);
			};
			ctx.stroke();
		};

		function drawField(ctx) {
			//var field = field.body;
			for (i = 0; i < field.body.length; i++) {
				if (field.body[i] != 0) {
					var x = i % width; //	Converting linear coordinate to (x,y)
					var y = (i - x) / width;
					ctx.fillStyle = "gray";
					roundRect(ctx, x * dotSize, y * dotSize, dotSize, dotSize, dotSize / 3, true, true);
				}
			}
		};

		//	function is drawing rectangle with rounded corners starting at (x,y)
		function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
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
					if (defaultRadius.hasownproperty(side)) {
						radius[side] = radius[side] || defaultRadius[side];
					}
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
		};
	};

	return draw;
});