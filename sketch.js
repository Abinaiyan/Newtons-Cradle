const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var roofObject
var rope1
var rope2
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobObject1 = new ball(415,800)
   bobObject2 = new ball(515,800)
   bobObject3 = new ball(615,800)
   bobObject4 = new ball(715,800)
   bobObject5 = new ball(815,800)
   roofObject = new roof(615,150,450,50)
   rope1 = new Rope(bobObject1.body,{x:415, y:150} )
   rope2 = new Rope(bobObject2.body,{x:515, y:150})
   rope3 = new Rope(bobObject3.body,{x:615, y:150})
   rope4 = new Rope(bobObject4.body,{x:715, y:150})
   rope5 = new Rope(bobObject5.body,{x:815, y:150})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

  }
}

