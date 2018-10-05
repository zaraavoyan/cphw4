function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 10; x < width+5; x = x + 10) {
    line(x-5, height/2, mouseX, mouseY);
  }
}
