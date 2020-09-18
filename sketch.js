//creating the variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bGroup, oGroup
var score = 0
var ground,ig;
var sTime = 0;

//preloading the animation and the images
function preload(){      
  
  monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(600,400)
  //creating the sprites and giving them properties
  monkey = createSprite(50,350,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ig = createSprite(220,392,1000,10);
  ig.visible = false
  
  ground = createSprite(320,380,1500,10);
  ground.velocityX = -8
  ground.x = ground.width/2
  
   
  
}


function draw() {
  //giving background colour
background("cyan")
  
  //giving jump command    
  if(keyDown("space") && monkey.collide(ground)){
    monkey.velocityY = -16;
    }
  
  //giving gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //create the scrolling background
  if(ground.x < 0) {
  ground.x = ground.width/2
  }
  
  //create the obstacles and bananas
  OBSTACLE();
  BANANA();
  
  //colliing monkey with the ground
  monkey.collide(ground)
  
  //display score and survival time
  textSize(20)
  text("Score: "+ score, 500,50)
  
  textSize(20)
  sTime = Math.ceil(frameCount/frameRate())
  text("Survival time: "+ sTime,100,50)
  
  //display the objects on the screen
  drawSprites();
}

//create functions for spawning the  obstacles and bananas
function OBSTACLE() {
  if(frameCount % 300 === 0) {
  obstacle = createSprite(600,370,20,20)
  obstacle.velocityX = -8
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15
  obstacle.collide(ig)
  }
}

function BANANA(){
  if(frameCount % 80 === 0) {
banana = createSprite(600,Math.round(random(200,250)),20,20)
  banana.velocityX = -8
  banana.addImage(bananaImage)
  banana.scale = 0.1;
  }
}

