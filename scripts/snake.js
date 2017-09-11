define([], function() {
	var Snake = function(settings) {
		this.settings = settings;
		this.body = [];
		this.head = {
			x: 1,
			y: 2,
		};
		this.length = settings.initialLength;
		this.direction = "right";
		this.speed = 200; //snake speed in ms between steps
	};

	Snake.prototype.move = function(direction) {
		switch (direction) {
			case "right":
				if (this.head.x === this.settings.boardWidth) {
					this.head.x = 1;
				} else {
					this.head.x += 1;
				};
				this.body.push({
					x: this.head.x,
					y: this.head.y,
				});
				return;
			case "left":
				if (this.head.x === 1) {
					this.head.x = this.settings.boardWidth;
				} else {
					this.head.x -= 1;
				}
				this.body.push({
					x: this.head.x,
					y: this.head.y,
				});
				return;
			case "up":
				if (this.head.y === 1) {
					this.head.y = this.settings.boardHeight;
				} else {
					this.head.y -= 1;
				}
				this.body.push({
					x: this.head.x,
					y: this.head.y,
				});
				return;
			case "down":
				if (this.head.y === this.settings.boardHeight) {
					this.head.y = 1;
				} else {
					this.head.y += 1;
				}
				this.body.push({
					x: this.head.x,
					y: this.head.y,
				});
				return;
		};
	};

	return Snake;
});