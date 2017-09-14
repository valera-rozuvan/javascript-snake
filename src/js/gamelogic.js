define(["field", "snake"], function(Field, Snake) {

	var Game = function(settings) {

		this.field = new Field(settings);

		this.snake = new Snake(settings);

		this.settings = settings;
	};

	Game.prototype.checkCollision = function() {
		var x = this.snake.head.x;
		var y = this.snake.head.y;
		var idx = (y - 1) * this.field.width + (x - 1);

		if (this.field.body[idx] !== 0) {
			if (this.food === idx) {
				this.snake.length += 5;
				if (this.snake.speed !== this.snake.speed / 9) {
					this.snake.speed -= this.snake.speed / 9;
				};
				this.score += 1;
				this.randomFood();
			} else {
				this.playing = false;
			}
		};
	};

	Game.prototype.putSnake = function() {

		function convert(x, y) {
			idx = (y - 1) * this.field.width + (x - 1);
			return idx;
		};

		var x = this.snake.head.x;
		var y = this.snake.head.y;

		this.field.body[convert.call(this, x, y)] = 1;

		if (this.snake.body.length > this.snake.length) {
			var piece = this.snake.body.shift();

			this.field.body[convert.call(this, piece.x, piece.y)] = 0;
		};

		//for (var i = 0; i < this.snake.body.length; i++) {
		//	x = this.snake.body[i].x;
		//	y = this.snake.body[i].y;
		//	this.field.body[convert.call(this, x, y)] = 1;
		//}
	};


	function keyboard(game) {
		document.onkeydown = function(event) {
			if (!game.keypressed) {
				game.keypressed = true;
				event.preventDefault();
				if (game.playing) {
					switch (event.key) {
						case "ArrowUp":
							if (game.snake.direction !== "down") {
								game.snake.move("up");
								game.checkCollision();
								game.snake.direction = "up";
							}
							return;
						case "ArrowDown":
							if (game.snake.direction !== "up") {
								game.snake.move("down");
								game.checkCollision();
								game.snake.direction = "down";
							}
							return;
						case "ArrowRight":
							if (game.snake.direction !== "left") {
								game.snake.move("right");
								game.checkCollision();
								game.snake.direction = "right";
							}
							return;
						case "ArrowLeft":
							if (game.snake.direction !== "right") {
								game.snake.move("left");
								game.checkCollision();
								game.snake.direction = "left";
							}
							return;
					};
				};
				if (event.code === "Space") {
					game.playing = true;
					game.keypressed = false;
				};
			};
		};
	};

	Game.prototype.randomFood = function() {
		var idx = Math.floor(Math.random() * (this.field.body.length - 1));
		if (this.field.body[idx] !== 1) {
			this.field.body[idx] = 1;
			this.food = idx;
		} else {
			this.randomFood();
		};
	};

	return {
		Game: Game,
		keyboard: keyboard,
	}
});