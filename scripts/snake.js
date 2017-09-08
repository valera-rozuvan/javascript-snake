define([], function() {

	var Snake = function(settings) {
		this.settings = settings;
		this.body = [];
		this.head = {
			x: settings.initialLength,
			y: 2,
		};
		this.length = settings.initialLength;
		this.direction = "right";
	};

	Snake.prototype.piece = function(x, y) {
		this.x = x;
		this.y = y;
	};

	Snake.prototype.build = function() {
		var y = this.head.y;
		if (this.body.length < this.length - 1) {
			var x;
			if (this.body.length === 0) {
				x = this.head.x - 1;
			} else {
				x = this.body[this.body.length - 1].x - 1;
			}
			this.body.push(new this.piece(x, y));
			this.build();
		} else {
			return;
		}
	};

	Snake.prototype.move = function(direction) {
		switch (direction) {
			case "right":
				if (this.head.x === this.settings.boardWidth) {
					this.head.x = 1;
				} else {
					this.head.x += 1;
				}
				return;
			case "left":
				if (this.head.x === 1) {
					this.head.x = this.settings.boardWidth;
				} else {
					this.head.x -= 1;
				}
				return;
			case "up":
				if (this.head.y === 1) {
					this.head.y = this.settings.boardHeight;
				} else {
					this.head.y -= 1;
				}
				return;
			case "down":
				if (this.head.y === this.settings.boardHeight) {
					this.head.y = 1;
				} else {
					this.head.y += 1;
				}
				return;
		}
	};

	return Snake;
});