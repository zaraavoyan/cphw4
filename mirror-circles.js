//not really sure what you meant by mirror? this is my interpretation anyway 
function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array
var mX = [];
var mY = [];

function draw() {
  background(255);
  noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)
  mX.push(mouseX + 100 );
	mY.push(mouseY - 30);
  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
		ellipse(mX[i],mY[i], 1 + (x.length - i))
  }

  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
	mX = mX.slice(-50); // keep the last 50 x values
  mY = mY.slice(-50);
}
