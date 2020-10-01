const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object,object_options;
var ground,ball;
var ball_options;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  object_options={
  isStatic:true
  }
  ball_options={
  restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  //object=Bodies.rectangle(200,100,50,50,object_options);
  //World.add(world,object);
  ground=Bodies.rectangle(200,390,200,20,object_options);
  World.add(world,ground)
}

function draw() {
  background(0);
  Engine.update(engine);
  //console.log(object.position.x);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}