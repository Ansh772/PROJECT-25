
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin,waste;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground1=new Ground(400,400,800,20);
	ground2=new Ground(550,300,20,200);
	ground3=new Ground(430,300,20,200);
	bin=new Dustbin(500,290,200,200); 
	waste=new Waste(170,380);
	
}


function draw() {
  
  background("orange");
  Engine.update(engine);
  waste.display();
  ground3.display();
  ground2.display();
  ground1.display();
  bin.display();
  
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(waste.body,waste.body.position,{x:275,y:-390});
}

}

