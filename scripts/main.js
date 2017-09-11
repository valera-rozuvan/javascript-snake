require.config({
	baseUrl: "scripts",
	paths: {
		"gamelogic": "gamelogic",
		"drawing": "drawing",
		"snake": "snake",
		"field": "field",
	}
});

require(["gamelogic", "drawing"], function(gamelogic, drawing) {

	var settings = {
		dotSize: 15, // size of square in px
		boardWidth: 30,
		boardHeight: 25,
		initialSpeed: 1,
		initialLength: 5, // length of the snake in squares
	};

	var game = new gamelogic.Game(settings);

	game.keypressed = false;
	game.score = -1;
	gamelogic.keyboard(game);

	drawing(game.field, game.score);

	game.score = 0;
	game.randomFood();
	setTimer();

	function setTimer() {
		var timerID = setInterval(function() {
			if (game.playing) {
				if (!game.keypressed) {
					game.snake.move(game.snake.direction);
					var speed = game.snake.speed;
					game.checkCollision();
				} else {
					game.keypressed = false;
				};

				game.putSnake();
				if (game.playing) {
					drawing(game.field, game.score);
				};
				game.keypressed = false;
				if (speed !== game.snake.speed) {
					clearInterval(timerID);
					setTimer();
				};
				if (!game.playing) {
					clearInterval(timerID);
				};
			};
		}, game.snake.speed);
	};
});