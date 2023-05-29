const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var left_wall;
var right_wall;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,790,800,20);
  left = new Ground(500,700,20,120);
  right = new Ground(600,700,20,120);
  top_wall =new Ground(400,10,800,20);
  left_wall = new Ground(20,290,20,1000);
  right_wall = new Ground(790,290,20,1000);
  var ball_options = {
    isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
  }
 ball = Bodies.circle(400,400,20,ball_options);
 World.add(world,ball)


 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  top_wall.show();
  left_wall.show();
  right_wall.show();
  
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20)
}

function HorizontalForce(){
  
}

function VerticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:75})
  }
}