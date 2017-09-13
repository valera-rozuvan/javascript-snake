require.config({
	baseUrl: "scripts",
	paths: {
		"gamelogic": "gamelogic",
		"drawing": "drawing",
		"snake": "snake",
		"field": "field",
	},
});

require(["init"], function(init) {
	init();
});