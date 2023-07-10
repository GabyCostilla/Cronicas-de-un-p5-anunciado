function setup() {
 
  createCanvas(400, 400);
}  


let angle = 0;

function draw() {
  background(25)
  translate(200,200,280)
 
 
  let v0 = createVector(50, 50);
  let v1 = createVector(50, 0);

for(let i = 0;i<100;i++){
 drawArrow(v0, v1.rotate(angle), 'red');
  angle += 0.000001;
   drawArrow(v0, v1.rotate(angle), 'black');
  angle += 0.000001;
}
  
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(0, 0);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(30, 75, -58, 20, 100, 75);
  pop()

}

