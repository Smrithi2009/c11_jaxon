var pathImg , path;
var boyImg,boy;
var LB;
var RB;
var edges;
function preload(){
  //pre-load images
  
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  boy = createSprite(200,200);
  boy.addAnimation("boyanimation",boyImg);
   boy.scale =0.1;
  
   LB = createSprite(50,0,100,100);
   RB= createSprite(350,0,100,100);
   LB.visible = false;
   RB.visible = false;

   edges = createEdgeSprites();
}

function draw() {
  background(0);
  drawSprites();
  path.velocityY = 4;
  if(path.y > 400) {
  path.y = height/2;
  }

boy.x = mouseX;
boy.collide(edges[3]);
boy.collide(LB);
boy.collide(RB);


}
