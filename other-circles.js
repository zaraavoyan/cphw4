function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(100,200); 
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 1; i < 50; i = i + 5) {
		
	
    // rect(x[i], y[i], 1 + (x.length - i),1 + (x.length - i));
beginShape(LINES);
vertex(x[i], y[i]);
vertex(x[i+10], y[i+10]);
vertex(x[i-20], y[i-20]);

endShape();
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
