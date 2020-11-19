var home,forestgump;
function setup() {
  createCanvas(800,400);
  home = createSprite(400, 200, 50, 50);
  home.shapeColor="blue";
  forestgump= createSprite(200,200,20,20);
  forestgump.shapeColor="blue";
}

function draw() {
  background(200,100,10);  
  forestgump.x=mouseX;
  forestgump.y=mouseY;
  if(forestgump.x-home.x < forestgump.width/2 + home.width/2 
    && home.x-forestgump.x<forestgump.width/2 + home.width/2
    && forestgump.y-home.y< forestgump.height/2 + home.height/2 
    && home.y - forestgump.y<forestgump.height/2 + home.height/2){
    forestgump.shapeColor="orange";
    home.shapeColor="orange";
  } else{forestgump.shapeColor="blue";
home.shapeColor="blue";}
  drawSprites();
}