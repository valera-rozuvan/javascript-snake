define([], function() {

	var Field = function(settings) {
		this.height = settings.boardHeight;
		this.width = settings.boardWidth;
		this.dotSize = settings.dotSize;

		this.body = [];
		this.body.length = this.width * this.height;
		this.body.fill(0);
	};

	return Field;
});