var snow, snowImage;
var background, backgroundImage;


function preLoad(){
  backGroundImage = loadImage("snow3.jpg");
  snowImage = loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);

  background=createSprite(200, 200, 800, 400);
  background.addImage("background", backgroundImage);

  snow=createSprite(200, 200, 800, 400);
  snow.addImage("snow", snowImage);
  snow.scale = 0.5;
}

function draw() {
  background(225); 
  drawSprites();
}