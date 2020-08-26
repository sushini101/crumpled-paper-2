
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var zone 

function preload()
{

}

function setup() {
	createCanvas(600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,665,800,15);
  paper = new paper(100,650,8,8);
  dustbin = new Trash(400,600,100,120);

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(231,252,188);

	up();

  ground.display();    
  paper.display();
  dustbin.display();
  drawSprites();
 
}

function up(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}

}


