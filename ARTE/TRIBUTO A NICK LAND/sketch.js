function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i = 0; i<10000;i++)
    line(random(400),random(400),random(400),random(400));
  
}





