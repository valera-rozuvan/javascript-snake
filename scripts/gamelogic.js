define(["field", "snake"], function(Field, Snake) {

	var Game = function(settings) {

		this.field = new Field(settings);

		this.snake = new Snake(settings);

		this.settings = settings;
	};

	Game.prototype.putSnake = function() {

		function convert(x, y) {
			idx = (y - 1) * this.field.width + x;
			return idx;
		};

		var x = this.snake.head.x;
		var y = this.snake.head.y;

		this.field.body[convert.call(this, x, y)] = 1;

		for (var i = 0; i < this.snake.body.length; i++) {
			x = this.snake.body[i].x;
			y = this.snake.body[i].y;
			this.field.body[convert.call(this, x, y)] = 1;
		}
	};

	Game.prototype.firstRun = function() {
		this.setField();
		this.field.randomFood();
		this.snake.build();
		this.field.getSnake();
		//console.log(Game.snake);
	};

	Game.prototype.nextRun = function() {
		this.snake.move(this.snake.direction);
		this.snake.build();
		this.field.getSnake();
	};

	function keyboard(game) {
		document.onkeydown = function(event) {
			switch (event.key) {
				case "ArrowUp":
					event.preventDefault();
					game.snake.move("up");
					game.snake.direction = "up";
					return;
				case "ArrowDown":
					event.preventDefault();
					game.snake.move("down");
					game.snake.direction = "down";
					return;
				case "ArrowRight":
					event.preventDefault();
					game.snake.move("right");
					game.snake.direction = "right";
					return;
				case "ArrowLeft":
					event.preventDefault();
					game.snake.move("left");
					game.snake.direction = "left";
					return;
			};
		};
	};

	Game.prototype.randomFood = function() {
		var idx = Math.floor(Math.random() * (this.field.body.length - 1));
		this.field.body[idx] = 1;
	};

	return {
		Game: Game,
		keyboard: keyboard,
	}
});