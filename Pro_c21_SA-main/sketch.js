const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var B1, B2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 B1 = createImg('up.png')
 B1.position(20, 30)
 B1.size(50, 50)
B1.mouseClicked(Vforce)

 B2 = createImg('right.png')
 B2.position(280, 30)
 B2.size(50, 50)
B2.mouseClicked(Hforce)

var ball_options={
  restitution: 1
}
ball = Bodies.circle(100, 200, 10, ball_options)
World.add(world, ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 10, 10)
  Engine.update(engine);
}

function Hforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})
}

function Vforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}