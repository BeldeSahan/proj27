const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    roof=new Roof(300,100,500,50);

    bob1=new Bob(100,500,50,50);
	bob2=new Bob(200,500,50,50);
	bob3=new Bob(300,500,50,50);
	bob4=new Bob(400,500,50,50);
	bob5=new Bob(500,500,50,50);

	rope1=new Rope(bob1.body,{x:100,y:100})
	rope2=new Rope(bob2.body,{x:200,y:100})
    rope3=new Rope(bob3.body,{x:300,y:100})
    rope4=new Rope(bob4.body,{x:400,y:100})
    rope5=new Rope(bob5.body,{x:500,y:100})
    Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);
  Engine.update(engine);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope1.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope2.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope3.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope4.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope5.fly();
}

