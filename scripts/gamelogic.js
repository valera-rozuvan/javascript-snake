define(["gamelogic"], function() {
var Game = Game || {};
Game.settings = {
	dotSize: 10, // size of square in px
	boardWidth: 40,
	boardHeight: 30,
	initialSpeed: 1,
	initialLength: 5, //length of the snake in squares
}

Game.field = Game.field || {};

Game.snake = Game.snake || {};

Game.run = function() {
	this.setField();
	this.field.randomFood();
	//console.log(this);
}

Game.setField = function() {
this.field.height = this.settings.boardHeight;
this.field.width = this.settings.boardWidth;

this.field.body = [];
this.field.body.length = this.field.width * this.field.height;
this.field.body.fill(0);
}

Game.field.randomFood= function(){
	var idx = Math.floor(Math.random() * (this.body.length-1));
	this.body[idx] = 1;
}

//Game.run();

return {Game: Game};
});