const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ball1,ground
var world,engine


function setup() {
  engine=Engine.create();
  world=engine.world;
  var bo={
restitution:0.8


  }
  ball1=Bodies.circle(200,100,20,bo)
  World.add(world,ball1)
  var option={
isStatic:true

  }
  ground=Bodies.rectangle(400,380,800,40,option)
  World.add(world,ground)
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Engine.update(engine);
  fill ("lightgreen")
  ellipseMode(RADIUS)
  ellipse(ball1.position.x,ball1.position.y,20,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,40)  
  drawSprites();
}