function setup() {
  createCanvas(760, 700, WEBGL);
  img = loadImage('https://tse3.mm.bing.net/th?id=OIP.MEMlqenAd0Hrq96BdhoycwHaHY&pid=Api&P=0');
  img2 = loadImage('')
}

function draw() {
  texture(img);
  background(199);
  
  
  
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.01 + j) * 100,
        cos(frameCount * 0,01 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.001);
      push();
     
      
      box(80, 60, 5);
      pop();
    }
    pop();
    box(1000,1000,1000)
  }
}