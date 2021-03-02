const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5;
var polygon; 
var ss;
var ground2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  block1 = new Box(260,300,30,50)
	block2 = new Box(290,300,30,50)
	block3 = new Box(320,300,30,50)
	block4 = new Box(350,300,30,50)
	block5 = new Box(380,300,30,50)

  block6 = new Box(275,250,30,50)
  block7 = new Box(305,250,30,50)
  block8 = new Box(335,250,30,50)
  block9 = new Box(365,250,30,50)

  block10 = new Box(290,200,30,50)
  block11 = new Box(320,200,30,50)
  block12 = new Box(350,200,30,50)

  block13 = new Box(300,150,30,50)
  block14 = new Box(330,150,30,50)

  block15 = new Box(315,100,30,50)

	ground = new Ground(320,335,170,20) 
  ground2 = new Ground(530,405,140,20) 

  block16 = new Box(500,380,30,50)
  block17 = new Box(530,380,30,50)
  block18 = new Box(560,380,30,50)

  block19 = new Box(515,330,30,50)
  block20 = new Box(545,330,30,50)

  block21 = new Box(530,280,30,50)

 polygon = new Circle(50,200,20)

 ss = new Slingshot(polygon.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {

  background(180,150);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display(); 

  block18.display();
  block19.display(); 
  block20.display();
  
  block21.display();

  ground.display();
  ground2.display();

  block16.display();

  polygon.display();

  ss.display();

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ss.fly();
}


