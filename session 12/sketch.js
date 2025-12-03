function setup() {
  createCanvas(700, 700);

  // Use degrees.
  angleMode(DEGREES);

  describe('A white circle on a black background.');
}

function draw() {
  background(30);
  
   // Rotate the coordinate system a little more each frame.
  let angle = frameCount * 1.1;
  rotate(angle);  
  


  // Draw the square.
  circle(400, 400, 400);
}