require.config({
	baseUrl: "scripts",
	paths: {
		"gamelogic": "gamelogic",
		"drawing": "drawing",
		"snake": "snake",
		"field": "field",
		"main": "main",
		"jasmine": "../jasmine/lib/jasmine-2.8.0/jasmine",
		"jasmine-html": "../jasmine/lib/jasmine-2.8.0/jasmine-html",
		"jasmine-boot": "../jasmine/lib/jasmine-2.8.0/boot",
	},

	shim: {
		jasmine: {
			exports: "jasmine"
		},
		"jasmine-html": {
			deps: ["jasmine"],
			//			exports: "jasmine"
		}
	}
	require(["init"], function(init) {
		init();
	});
});