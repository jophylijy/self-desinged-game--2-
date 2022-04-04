var boy,boy_running;
var dog;
var ground;
var food;
var home;
var ground_img;
function preload(){
boy_running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png");
ground_img = loadImage("ground.png") 
}

function setup(){
  createCanvas(windowWidth,windowHeight);
boy = createSprite(300,600,14,10);
boy.addAnimation("running",boy_running);
ground = createSprite(50,800,4000,10);
ground.shapeColor = "green"
//  ground.addImage("ground",ground_img);
  ground.x = width/2
  ground.velocityX = -5
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
}

function draw(){
  background("white");
  drawSprites();
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
}