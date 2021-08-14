var canvas, bg, daybg, eveningbg, nightbg, ground;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var database;
var obstacles;

var astronaut1, astronaut2, astronaut1power, astronaut2power;
var asteroid, cloud, cloud2;
var blackhole, wormhole;
var plane1, plane2, satellite, mars;

var posX, posY;



function preload(){
  //asteroid = loadImage("images/asteroid.png");
 // astronaut1power = loadImage("images/astronaut 1 power.png");
 // astronaut1 = loadImage("images/astronaut 1.png");
 // astronaut2power = loadImage("images/astronaut 2 power.png");
  //astronaut2 = loadImage("images/astronaut 2.jpg");
 // bg = loadImage("images/background.jpg");
 // blackhole = loadImage("images/black hole.gif");
   cloudimg = loadImage("images/cloud.png");
 // cloud2 = loadImage("images/cloud2.jpg");
 /* daybg = loadImage("images/daybg.jpg");
  eveningbg = loadImage("images/eveningbg.jpg");*/
  //mars = loadImage("track.png");
  //nightbg = loadImage("images/nigthbg.jpg");
  //plane1 = loadImage("images/plane1.png");
 // plane2 = loadImage("images/plane2.png");
 // satellite = loadImage("images/satellite1.png");
  //wormhole = loadImage("images/wormhole.jpg");*/
}

function setup() {
  createCanvas(1500,840);



astronaut1 = createSprite(715,830,40,300);
astronaut2 = createSprite(1120,830,40,300);
ground = createSprite(592,841,1800,20);
}


function draw() {
  background("black");

  if(keyDown("up")){
    astronaut1.velocityY = -12 ;
  }
  astronaut1.velocityY = astronaut1.velocityY + 0.8;

  if(keyDown("space")){
    astronaut2.velocityY = -12 ;
  }
  astronaut2.velocityY = astronaut2.velocityY + 0.8;

  posX = mouseX;
  posY = mouseY;
  fill("white");
  text(posX+","+posY,10,10);
  astronaut1.collide(ground);
  astronaut2.collide(ground);
  drawSprites();
  spawnClouds();
  spawnBirds();
}
  function spawnBirds(){
    if(frameCount%120 === 0){
      var bird = createSprite(1480,60,30,10); 
      bird.velocityX = -4;
      bird.y = Math.round(random(90,300));
    }
  }

  function spawnClouds(){
    if(frameCount%60 === 0){
      var cloud = createSprite(1480,60,30,10);
      cloud.addImage(cloudimg);
      cloud.scale = 0.1;
      cloud.velocityX = -2;
      cloud.y = Math.round(random(20,100));
    }
  }