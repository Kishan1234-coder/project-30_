const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var block1;
var slingshot;

function preloa(){

}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(550,450,300,20);
    ground2 = new Ground(1000,250,230,20);
    ground3 = new Ground(740,height,1600,20);

    block1 = new Block(440,415,40,50);
    block2 = new Block(481,415,40,50);
    block3 = new Block(522,415,40,50);
    block4 = new Block(563,415,40,50);
    //block4 = new Block(563,415,40,50);
    block5 = new Block(604,415,40,50);
    block6 = new Block(645,415,40,50);
    block7 = new Block(481,364,40,50);
    block8 = new Block(522,364,40,50);
    block9 = new Block(563,364,40,50);
    block10 = new Block(604,364,40,50);
    block11 = new Block(522,313,40,50);
    block12 = new Block(563,313,40,50);
    block13 = new Block(545,263,40,50);
    block14 = new Block(930,214,40,50);
    block15 = new Block(971,214,40,50);
    block16 = new Block(1012,214,40,50);
    block17 = new Block(1053,214,40,50);
    block17 = new Block(1053,214,40,50);
    block18 = new Block(971,163,40,50);
    block19 = new Block(1012,163,40,50);
    block20 = new Block(995,112,40,50);
    polygon =  new Polygon(130,415);
    slingshot = new Slingshot(polygon.body,{x:130,y:415});

    
}
function draw(){
    background("darkBlue");
    text("Drag the Hexagonal Stone and Release it, to launch toward the block",500,50);
    textSize(30);

    Engine.update(engine);
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    polygon.display();
    ground3.display();
    slingshot.display();
  

}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
   }
   function mouseReleased(){
	   slingshot.fly();
   }
   //function keyPressed(){
	   //if(keyCode === 32){
		  // Matter.Body.setPosition(polygon.body,{x:220,y:420});
		  // slingshot.attach(polygon.body);
	   //}
   
   function detectollision(lpolygon,lblock){
	   var blockBodyPosition = lblock.body.position;
	   var polygonBodyPosition = lpolygon.body.position;

     var distance=dist(polygonBodyPosition.x, polygonkBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
   
	   if(distance<=lblock.r+lpolygon.r){
		   Matter.Body.setStatic(lblock.body,false);
        
	   }
   }
   function keyPressed(){
       if(keyCode === 32){
           slingshot.attach(polygon.body);
       }
   }
