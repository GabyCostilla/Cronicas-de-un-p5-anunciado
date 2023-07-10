let main, enemy, enemy2, enemy3, enemy4;
let mainlife = 3;
let shots;
let img, img2;
let rect;

let a = true;

function preload() {
  img1 = loadImage("enem2.png");
  img2 = loadImage("enem.png");
}

function setup() {
  createCanvas(500, 500);
  chars();

  img = loadImage("bg.jpg");
  setTimeout(hot, 4000);
  setTimeout(enem, 6000);
  setTimeout(powerup, 15);
  enem();
  // groups();
}

function draw() {
  if (a == true) {
    //gameover
    clear();
    background(img);
    mov();

    main.rotation = 0;
  } else {
    background("gameover.jpg");
  }
}

function chars() {
  main = new Sprite();
  main.x = width / 2;
  main.y = height - 20;
  main.h = 50;
  main.w = 50;
  main.addImage("main.png");
  main.collider = "none"
  
  enemy = new Sprite(img2);
  enemy.x = width / 2;
  enemy.y = height / 4;
  enemy.h = 20;
  enemy.w = 20;
  enemy.vel.x = 5;
  enemy.collider = "none";
  img2.resize(150, 150);

  rect = new Sprite(0, main.y + 5, 1000, 1, "static");
  rect.visible = false;
}

function powerup() {
  power = new Sprite();

  power.x = random(2, 400);
  power.y = 10;
  power.diameter = 50;
  power.life = 3000;
  power.vel.y = -10;
  power.color = "#F44336";
  power.collider = "none";
  setTimeout(powerup, 15000);

  if (main.overlaps(power)) {
  }
}

function mov() {
  if (kb.pressing("a")) {
    main.vel.x = -5;
  } else if (kb.pressing("d")) {
    main.vel.x = 5;
  } else {
    main.vel.x = 0;
  }

  if (enemy.x == width - 50) {
    enemy.vel.x = -5;
  } else if (enemy.x == 50) {
    enemy.vel.x = 20;
  }

  if (enemy.vel.x > 0) {
    enemy.vel.x = 5;

    if (enemy.vel.x < 0) {
      enemy.vel.x -= 5;
    }

    if (main.x > width - 50) {
      main.x = width - 49;
    }

    if (kb.pressed("s")) {
      shots = new Sprite(main.x + 20, main.y - 60, 20, 20);
      shots.w = 5;
      shots.h = 10;
      shots.moveTo(main.x, main.y - 2000, 20);
      shots.life = 200;
      shots.vel.y = -30;

      shots.color = "#160601";
      shots.rotation = 0;
    }
  }

  if (
    enemy2.y === width - 70 ||
    enemy2.y === width - 70 ||
    enemy3.y === width - 70
  ) {
  }
}

function hot() {
  shot = new Sprite(enemy.x, enemy.y + 10, 20, 20);
  shot.w = 5;
  shot.h = 10;
  shot.moveTo(main.x, main.y - 2000, 20);
  shot.life = 200;
  shot.vel.y = 5;

  shot.color = "#160601";

  setTimeout(hot, 4000);

  if (shot.collide(main)) {
    main.remove();
  }
}

function enem() {
  enemy2 = new Sprite(img1, 0, 0);
  enemy2.x = 250;
  enemy2.y = 0;
  enemy2.h = 20;
  enemy2.w = 20;
  enemy2.vel.y = 1;
  enemy2.life = 500;

  img1.resize(100, 100);

  enemy3 = new Sprite();
  enemy3.x = 150;
  enemy3.y = 0;
  enemy3.h = 20;
  enemy3.w = 20;
  enemy3.vel.y = 1;
  enemy3.life = 500;
  enemy3.addImage("enem2.png");

  enemy4 = new Sprite();
  enemy4.x = 350;
  enemy4.y = 0;
  enemy4.h = 20;
  enemy4.w = 20;
  enemy4.vel.y = 1;
  enemy4.life = 500;
  enemy4.addImage("enem2.png");
  setTimeout(enem, 6000);

  if (enemy2.y == 489) {
    a = false;
  }
}
