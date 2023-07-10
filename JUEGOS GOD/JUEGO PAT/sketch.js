let mlk, floor, wall, obstacle, pat, gun, limit, shots;
let counter = 0;
let cont = 0
let img2;
let timeLimit;
let countDown;
let vida = 3;

function preload(){
  shots = new Group();
}

function setup() {
	createCanvas(550,400);

 
    img2 = loadImage("etiopia.png")
	world.gravity.y = 20;
    objetos();
    enemigos();
    pickups();
    bullet();
  
  shots.overlap(pat, (shot,pat)=>{
      vida -= 1
      console.log(vida)
  });
}

function draw() {

      background(img2,255)
   console.log(bullet())
  salto();
  movimiento();
  gunact();
  
 
  
  
  if(pat.vel.x  < 0){
    
      pat.vel.x =  -5
    
    }else if(pat.vel.x > 0){
      
      pat.vel.x = 5
  
    }
  
    if(vida <= 0){
    
    pat.remove()
    
    }
  
    let currentTime = int(millis() / 1000);
    countDown = timeLimit - currentTime;
  
 
  
    textSize(24)
    fill(255)
    text("TIME: " + currentTime, 60, 30)
    
    if( currentTime > 10){
    
    win()
    
    }
  
    if(pat.collide(mlk)){
    
    lose()
    
    }
  
    
  
  
  //clear();
  

  
}

function movimiento(){

   if(kb.pressing("a")) {
       mlk.vel.x =-5;
     }else if(kb.pressing("d")) {
       mlk.vel.x=5;
     }else if(kb.pressing("d")) {
       mlk.vel.x=5;   
     }else{
       mlk.vel.x=0
     }
  
}

function salto(){

  if(cont != 1){
  if(kb.pressing(" ")) {
       cont += 1;
       mlk.vel.y=-10;
   }
  }
  
  if(mlk.collides(floor)){
     cont = 0;
     }
  
  if(mlk.collides(obstacle)){
     cont = 0;
     }
  
  if(mlk.collides(wall)){
     cont = 0;
     }
    
} 

function objetos(){

    mlk = new Sprite();
	mlk.y = 30;
    mlk.x = 1;
    mlk.w = 50;
    mlk.h = 50;
    mlk.bounciness = 0.5;
    mlk.addImage("mlk-nobg.png")
    mlk.rotation = 0;

    floor = new Sprite(1,400,10000,5,"static")
  
    wall = new Sprite(530,300,100,200,"static")
    
    obstacle = new Sprite(300,300,50,50,"static")
  
    limit = new Sprite(0,0,1,800,"static")
    
}

function enemigos(){

    pat = new Sprite();
	pat.diameter = 50;
	pat.y = 150;
    pat.x = 500;
    pat.w = 50;
    pat.h = 50;
    pat.bounciness = 0.5;
    pat.vel.x = -5
    pat.rotation = 0;
    pat.addImage("pat.png")
  
}

function pickups(){

  gun = new Sprite(300,250,30);
  gun.addImage("gund.png")
  
}

function gunact(){

 if(mlk.collides(gun)){
 
  mlk.addImage("mlk-gun.png")
   gun.remove()
   if(mlk.collides(pat)){
     pat.remove();
   }

  }
     
  if(pat.collides(mlk)){
  mlk.remove();
 }
  
}

function bullet(){

  
  
  if(kb.pressed("q")){
     
     shots = new createSprite(mlk.x,mlk.y,20,20)
     shot.vel.x = 50
          
    
     }


}

function win(){

  
  
  mlk.remove();
  pat.remove();
  obstacle.remove();
  floor.remove();
  wall.remove();
  background(0,255,0)
  textSize(50)
  text("GANASTE QLIA", 1 , height / 2) 
  

}

function lose(){

  currentTime = 0
  mlk.remove();
  pat.remove();
  obstacle.remove();
  floor.remove();
  wall.remove();
  background(255,0,0)
  textSize(50)
  text("PERDISTE QLIA", 1 , height / 2) 
  

}
