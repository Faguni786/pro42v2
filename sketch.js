var monkey,monkey_running,backimage,backimg;
var bananaimg,obstacleimg;
var invisibleground,edges;


function preload() {
  backimage=loadImage("jungle2.jpg");
  monkey_running=
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("obstacle.png");
  

  
}




function setup() {
  createCanvas(400, 400);
 
  
  backimg=createSprite(0,0,400,400);
  backimg.addImage("background",backimage);
 backimg.velocityX=-4;
  backimg.x = backimg.width/2;
  monkey=createSprite(100,340,20,50);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.25;
  
  invisibleground=createSprite(280,385,400,20); 
invisibleground.visible=false;
  edges=  createEdgeSprites();

}

function draw() {

  background(220);
   backimg.x=backimg.width/2;
  
   //jumping of monkey
    if (keyDown("space")) {
      monkey.velocityY=-25;
    }           
      // stop falling monkey from ground
    
      
      
      // adding gravity
      monkey.velocityY=monkey.velocityY+0.8 ;
      monkey.collide(invisibleground);
     
      food();
    obstacles();
    
    drawSprites();

}

function food() {
  if (frameCount%80===0){
var banana =createSprite(200,80,10,10);
  banana.addImage("food",bananaimg)
 
  banana.velocityX=-12;
  banana.scale=0.05;
}
}
 



function obstacles() {
  if (frameCount%300===0){
var   stone=createSprite(200,350,10,10);
  
  stone.addImage ("stone",obstacleimg);
  stone.velocityX=-6;
  stone.scale=0.25;
  
//  var survival
 // survivalTime=Math.ceil(World.frameCount/World.frameRate) ;
    
 // text("survival Time: "+ survivalTime,100,50);
}

}
  
  
  
  
  
  
  
  
  
  
