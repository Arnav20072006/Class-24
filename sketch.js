const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world  = engine.world;
  box1   = new Box(700,330,70,70);
  box2   = new Box(920,330,70,70);
  box3   = new Box(700,250,70,70);
  box4   = new Box(920,250,70,70);
  box5   = new Box(810,170,70,70);
  ground = new Ground(400,390,1200,5);
  pig1   = new Pigs(810,330);
  pig2   = new Pigs(810,250);
  log1   = new Log(810,270,320,PI/2)
  log2   = new Log(810,190,320,PI/2);
  log3   = new Log(760,130,130,PI/7);
  log4   = new Log(870,130,130,-PI/7);
  bird   = new Bird(200,200);
 
}

function draw() {
  
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
}