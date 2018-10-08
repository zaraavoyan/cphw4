function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	lines = new Move()
}

function draw() {
	background(255);
	lines.move();
	lines.display();
	frameRate(10);
}

function Move() {
	this.x = 30;
	this.y = 200;
	this.speed = 0.5

	this.move = function() {
		this.x += this.x + 3;

	};

	this.display = function() {
		for (var i = 30; i < width; i = i + 15) {
			line(this.x+i, height / 2, this.x + 100+i, height / 2 - 75);
		}
	};
}
