
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var world
function preload()
var ground
var left
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	left = new Ground(1100,600,20,120);
	
	var ball_options={
		isStatci:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display
  drawSprites();
 
}



