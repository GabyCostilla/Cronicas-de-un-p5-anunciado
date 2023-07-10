
function setup() {
  createCanvas(600,700, WEBGL);
  describe('a rotating rgb(46,10,10) torus');
}

function draw() {
  background(205, 102, 94);
   rotateY(millis() / 1000);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(random(100),random(15));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(random(100));
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(random(100),random(100));
    rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cone(40, 70);
}