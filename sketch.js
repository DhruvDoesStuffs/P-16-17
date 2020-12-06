
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, posistionY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,420,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400,480,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  
  
  
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
background("lightblue");
  
  if(ground.x < 0){
     
     ground.x = ground.width/2;
     }
  if(keyDown("Space")){
     monkey.velocityY = -15;
  
     }
  monkey.velocityY = monkey.velocityY+1;
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}



function spawnBananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,posistionY,10,10);
   
     posistionY = Math.round(random(120,200));
   
   banana.velocityX = -(6 + score/100);
   banana.addImage(bananaImage); 
   banana.scale = 0.2;
   banana.lifetime = 400;
   bananasGroup.add(banana);
   
 }
}


 function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,420,20,20);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleImage);  
   obstacle.scale = 0.4;
   obstacle.lifetime = 400;
   obstaclesGroup.add(obstacle);
 }

  
  
  
  
  
}


