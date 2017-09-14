require.config({
	baseUrl: "js/",
	paths: {
		"gamelogic": "gamelogic",
		"drawing": "drawing",
		"snake": "snake",
		"field": "field",
        "init": "init",
	}
});

require(["init"], function(Init) {
    Init();
});
