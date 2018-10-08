function setup() {
	createCanvas(400, 400);


}
var b = 100;
var a = 200
var angle = 0



function draw() {
	background(255);


	var x1;
	var y1;
  angle=0;
	for (var i = 0; i < 20; i = i + 1) {
		line(x1, y1, mouseX, mouseY);
		x1 = a + b * cos(angle);
		y1 = a + b * sin(angle);
		angle = angle + 15;


	}


}
