var fixedRect,movingRect;
var canvas;

function setup()
 {
  canvas=createCanvas(1200,1200);
  fixedRect=createSprite(500,200 ,50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(600, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;

  gameObject1=createSprite(100, 200, 50, 50);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(200, 200, 50, 50);
  gameObject2.shapeColor="blue";
  gameObject3=createSprite(300, 200, 50, 50);
  gameObject3.shapeColor="blue";
  gameObject4=createSprite(400, 200, 50, 50);
  gameObject4.shapeColor="blue";
 }

function draw() {
  background("gold");  
   movingRect.x=mouseX;
   movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject1))
  {
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else
  {
    gameObject1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  drawSprites();
}

