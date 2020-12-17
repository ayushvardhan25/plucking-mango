
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy1,boy2
var gameState = "onSling";
var slingshot
var stone2  = []
function preload()
{
boy1 = loadImage("boy.png")

	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy2 = createSprite(130,530,50,50)
boy2.addImage(boy1)
boy2.scale = 0.1
ground = new Ground(200,600,2600,20);	
stone1 = new Stone(100,400,50,50)
slingshot = new SlingShot(stone1.body,{x:100, y:400});


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
 stone1.display() 
 slingshot.display()
 drawSprites();

 
}
function mouseDragged(){
	if (gameState!=="launched"){
		 Matter.Body.setPosition(stone2[stone2.length-1].body,{x:mouseX,y:mouseY});
		 Matter.Body.applyForce(stone2[stone2.length-1].body,stone2[stone2.length-1].body.position,{x:5,y:-5})
		 return false
	 }
 }
 
 
 function mouseReleased(){
	 slingshot.fly();
	//stone1.pop();
	gameState = "launched";
 return false
 }
 
 function keyPressed(){
	 if(keyCode === 32&&gameState==='launched'){
		 if(stone1.length>=0){
		slingshot.attach(stone2[stone2.length-1].body);
 Matter.Body.setPosition( stone2[stone1.length-2].body,{x:200,y:50})

	gameState = 'onsling'
 
	 
 
 
		 }
 }
 

 }

