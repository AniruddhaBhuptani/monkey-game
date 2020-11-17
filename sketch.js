
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,groundImage;

var survivaltime = 0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);

   
  monkey = createSprite(50,350,90,50);
  monkey.addAnimation("running",  monkey_running);
  monkey.scale = 0.1;
  
  obstacle = createSprite(200,329,400,20);
  obstacle .addImage(obstaceImage );
  obstacle .x = obstacle.width /2;
  obstacle.scale=0.1;
  
  banana = createSprite(200,120,400,20);
  banana .addImage(bananaImage );
  banana .x = obstacle.width /2;
  banana.scale=0.1;
  
 
  ground= createSprite(200,350,1400,10);
  ground .x = ground.width /2;
  ground.scale=1; 
   
  monkey.setCollider("rectangle",0,0, monkey.width, monkey.height);
  // monkey.debug = true
  
  score = 0;
 
} 


function draw() {

  background(180);
  
   
  if(keyDown("space")&&  monkey.y >= 100) {
         monkey.velocityY = -12;
      }
  ground.velocityX = -(4 + 3* score/100)
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  if (ground .x<0){
    
    ground . x = ground.width /2;
    
  } 
  
  
 
 monkey.collide(ground)
  
  
  
 /* stroke("white")
  textSize(20)
  fill("white")
  text("score: "+ score , 500,50 )*/
  
   stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival time :"+ survivaltime,200,50)
  
   drawSprites();
}






