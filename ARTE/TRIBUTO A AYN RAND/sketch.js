function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(millis() / -2);
  rotateY(millis() / 2);
  sphere(random(40))  
}