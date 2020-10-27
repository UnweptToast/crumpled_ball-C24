
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, ball;
var ballRadius;
var pressed = 1;
var xForce = 115, yForce = -100;

var groundWidth, groundHeight = 20;
var boxBase, boxLeftEdge, boxRightEdge

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	groundWidth = width
	var ball_options = {restitution: 0.3, friction: 0.5, density: 1.2}
	ball = Bodies.circle(200,580,25, ball_options);

	var ground_options = {isStatic: true}
	ground = Bodies.rectangle(width/2, height/1.1, groundWidth, groundHeight, ground_options);

	World.add(world, ball);
	World.add(world, ground);
	Engine.run(engine);

	boxBase = new DustbinEdge(900,ground.position.y - 10,200,20);
	boxLeftEdge = new DustbinEdge(800,ground.position.y-50,20,100);
	boxRightEdge = new DustbinEdge(1000,ground.position.y-50,20,100);


	console.log(ground);
}


function draw() {
  background("black");

  textSize(20);text("Force along X axis(use left and right arrows to change): " + xForce, width/2 - 300,100)
  textSize(20);text("Force along Y axis(use a and d to change): " + -(yForce), width/2 - 250,150)
  
  ellipseMode(RADIUS);
  fill("white")
  ellipse(ball.position.x,ball.position.y,ball.circleRadius);

  rectMode(CENTER);
  fill("yellow")
  rect(ground.position.x, ground.position.y, groundWidth, groundHeight);

  if(keyWentDown("LEFT_ARROW")) {
	  xForce = xForce - 5
  }
  if(keyWentDown("RIGHT_ARROW")) {
	xForce = xForce + 5
  }
  if(keyWentDown("a")) {
	  yForce = yForce + 5
  }
  if(keyWentDown("d")) {
	yForce = yForce - 5
}
  if((keyWentDown("UP_ARROW") || keyWentDown("space")) && pressed>0) {
	  Matter.Body.applyForce(ball, ball.position, {x: xForce, y: yForce});
	  pressed = 0;
  }
  
  boxBase.display();
  boxLeftEdge.display();
  boxRightEdge.display();
 
}



