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

	gamelogic.keyboard(game);

	game.randomFood();
	game.snake.build();
	game.putSnake();

	drawing(game.field);

	var steps = 0;
	var timerID = setInterval(function() {
		game.snake.move(game.snake.direction);
		game.snake.build();
		game.putSnake();
		drawing(game.field);
		steps++;
		if (steps > 20) {
			clearInterval(timerID)
		};

	}, 500);


});