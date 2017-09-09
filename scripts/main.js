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
		boardWidth: 50,
		boardHeight: 40,
		initialSpeed: 1,
		initialLength: 5, // length of the snake in squares
	};

	var game = new gamelogic.Game(settings);

	game.keypressed = false;
	gamelogic.keyboard(game);

	game.randomFood();

	var steps = 0;
	var timerID = setInterval(function() {
		if (!game.keypressed) {
			game.snake.move(game.snake.direction);
		} else {
			game.keypressed = false;
		};

		game.putSnake();
		drawing(game.field);
		game.keypressed = false;
		steps++;
		if (steps > 200) {
			clearInterval(timerID)
		};

	}, 200);


});