const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paddle, ball, hanger;



function setup(){
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  paddle = new Paddle(260,130,200,30);
  ball = new Ball(20,200,40);
  hanger = new Hanger(ball.body,{x: 260 , y:140});

}

function draw(){
  background(157,242,236);  
  Engine.update(engine);
  strokeWeight(4);
  
  paddle.display();
  ball.display();
  hanger.display();

  if(keyCode === UP_ARROW){
    Matter.Body.setPosition(ball.body , {x: mouseX, y: mouseY})
  }
  
  
  textSize(25);
  textFont("georgia");
  text("press up arrow to osillate the bob ",180,25);
}



