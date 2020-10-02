var frect,mrect;


function setup() {
  createCanvas(1200,800);
  
mrect=createSprite(600,400,50,80);
mrect.shapeColor="yellow";
mrect.velocityY=+3;

frect=createSprite(400,200,80,30);
frect.shapeColor="yellow";
frect.velocityY=-3;

}

function draw() {
  background(0,0,0);  

mrect.x=World.mouseX;
mrect.y=World.mouseY;

bounceOff(mrect,frect);

  drawSprites();
}

function bounceOff(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2
  && object2.x-object1.x<object1.width/2+object2.width/2){

    object1.velocityX=object1.velocityX * (-1);
object2.velocityX=object2.velocityX * (-1);

  }
  if( object1.y-object2.y<object1.width/2+object2.width/2
  && object2.y-object1.y<object1.width/2+object2.width/2){

    object1.velocitY=object1.velocityY * (-1);
    object2.velocityY=object2.velocityY * (-1);

}
}