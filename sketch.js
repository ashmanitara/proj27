
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3,bobObject4, bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 bobObject1 = new Bob(120,300,50,50);
 bobObject2 = new Bob(180,300,50,50);
 bobObject3 = new Bob(240,300,50,50);
 bobObject4 = new Bob(300,300,50,50);
 bobObject5 = new Bob(360,300,50,50);
 roof = new Roof(240,100,250,30);
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



