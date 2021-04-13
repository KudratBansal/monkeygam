
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  

  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  survivalTime = 0;
}


function draw() {
  background("white");
  survivalTime= survivalTime + Math.round(getFrameRate()/60);
  
  if(ground.x<200){
    ground.x=ground.width/2;
  }
  
  
  console.log(getFrameRate())
  if(keyDown("space")&& monkey.y<350){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
 
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: ",10,50);
  Food();
  obstacles();
  
  drawSprites();
}

function Food(){
  if(frameCount%80===0){
    banana = createSprite(400,200,10,10);
    banana.y=Math.round(random(120,220));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
  FoodGroup.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
}

function obstacles(){
  
  if(frameCount%300===0){
    obstacle = createSprite(400,330,10,10);
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
  
}





