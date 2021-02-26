
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy, lineR;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,90,30);
	mango3=new mango(1000,120,30);
	mango4=new mango(1170,70,30);
    stoneObj = new Stone(260, 200, 15);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	lineR = new Slingshot(stoneObj.body, {x:240, y:420})
	
	
	Engine.run(engine);

}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stoneObj.display();
  lineR.display();
  groundObject.display();
}
 function mouseDragged() {
  
  stoneObj.body.position.x = World.mouseX;
 stoneObj.body.position.y = World.mouseY;

}

function mouseReleased(){

stoneObj.Constraint = null;

}