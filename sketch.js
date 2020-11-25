const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var polygon;
var ball;
var sling;
var score = 0;

function preload() {

}

function setup() {
createCanvas(1200,800)

  engine = Engine.create();
  world = engine.world
 
  text("score" + score,750,40);

  box1 = new Box(530,640,60,60);
  box2 = new Box(590,640,60,60);
  box3 = new Box(650,640,60,60);
  box4 = new Box(710,640,60,60);
  box5 = new Box(470,640,60,60);
  box6 = new Box(410,640,60,60);
  box7 = new Box(770,640,60,60);

  box8 = new Box(590,580,60,60);
  box9 = new Box(650,580,60,60);
  box10 = new Box(710,580,60,60)
  box11 = new Box(470,580,60,60)
  box12 = new Box(530,580,60,60);

  box13 = new Box(650,520,60,60);
  box14 = new Box(590,520,60,60);
  box15 = new Box(530,520,60,60);

  box16 = new Box(590,440,60,60)


  ground = new Ground(600,700,600,20)

  ball = new Ball(1000,300,40);

  sling = new Sling(ball.body,{x : 1000,y : 300});
}

function draw() {
  background("lightgreen")

  Engine.update(engine);

  textSize(25)
  text("score :" + score,750,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();
 
  ball.display();

  ground.display();

  sling.display();

  
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body,{x : mouseX,y : mouseY});

}

function mouseReleased() {
sling.fly();

}



