
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
}

var sparkles = [];

function draw() {
  background(0, 10);

  noStroke();

  for (var i = 0; i < sparkles.length; i = i + 1) {
    var sparkle = sparkles[i];

    fill(sparkle.h, 100, 120-sparkle.frames/2);
    ellipse(sparkle.x, sparkle.y, sparkle.diameter);

    sparkle.x = sparkle.x + sparkle.vx;
    sparkle.y = sparkle.y + sparkle.vy;
    sparkle.diameter = random(30);
    // add a little friction & gravity
    sparkle.vx = sparkle.vx * 0.99;
    sparkle.vy = sparkle.vy * 0.99 + 0.02;

    // count how many frames the sparkle has been visible
    sparkle.frames = sparkle.frames + 1;
  }

  // remove any sparkles older than 240 frames
  while (sparkles.length > 0 && sparkles[0].frames > 240) {
    sparkles.shift();
  }
}

function mousePressed() {
  for (var i = 0; i < 30; i = i + 1) {
    var angle = random(TWO_PI);
    var distance = random(1.5,2);

    sparkles.push({
      h: random(360),
      x: mouseX,
      y: mouseY,
      vx: distance * sin(angle),
      vy: distance * cos(angle),
      frames: 0
    });
  }
}
