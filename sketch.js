var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
 surface1 = createSprite(800,500,200,20);
 surface1.shapeColor = "red";

 surface2 = createSprite(590,500,200,20);
 surface2.shapeColor = "blue";

 surface3 = createSprite(370,500,200,20);
 surface3.shapeColor = "yellow";

 surface4 = createSprite(150,500,200,20);
 surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,900));
    box.width = 20;
    box.height = 20;
    box.shapeColor = "white";
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
       edges = createEdgeSprites();
     box.collide(surface3);
     box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
     if(box.isTouching(surface1) && box.bounceOff(surface1)){
         box.shapeColor = "red";
         music.play();
     }
     if(box.isTouching(surface2) && box.bounceOff(surface2)){
         box.shapeColor = "blue";
         music.play();
     }
     if(box.isTouching(surface3)){
         box.shapeColor = "yellow";
         music.stop();
         box.velocityYs = 0;
     }
     if(box.isTouching(surface4) && box.bounceOff(surface4)){
         box.shapeColor = "green";
         music.play();
     }
    drawSprites();
}
function isTouching(o1,o2){
    if(o1.x - o2.x < o2.width/2 + o1.width/2
        && o2.x - o1.x < o2.width/2 + o1.width/2
        && o1.y - o2.y < o2.height/2 + o1.height/2
        && o2.y - o1.y < o2.height/2 + o1.height/2){
            return true;
        }
        else{
            return false;
        }
}

function bounceOff(o1,o2){
 if( o1.x - o2.x < o2.width/2 + o1.width/2
  && o2.x - o1.x < o2.width/2 + o1.width/2)
{
    o1.velocityX = o1.velocityX * (-1);
    o2.velocityX = o2.velocityX * (-1);
}
if(o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2){
        o1.velocityY = o1.velocityY * (-1);
        o2.velocityY = o2.velocityY * (-1);
    }
}