let MENU = 0
let img2, img3, img4

function preload() {
  img2 = loadImage('assets/beowulf.jpg');
  img3 = loadImage("assets/button.png");
  img4 = loadImage("assets/title.png")
  
}

function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  background(img2,255)
  image(img4,200,60)
  ok()
  
  if(MENU == 1){
    game()
  }
  
}

function boton(){


  
  
}

function ok(){

  /*
 
  fill(0, 255, 0);
  rect(300, 400, 200, 75);
  textSize(50)
  fill(255);
  text('START', 320, 455);

  */
  
  image(img3,150,200)
  
  

}

function game(){

  clear()
  background(0,255,0)
  textSize(20);
  text("ACA TENDRIA QUE ESTAR EL JUEGO ÑIJIJIJIJIJIJIJJIJ",20,20)

}

function mouseClicked(){

  if (MENU == 0) {
    if (mouseX < 480 && mouseX > 320) {
      if (mouseY < 500 && mouseY > 410){
        MENU = 1
      }
    } 
  }
}