
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paperobject,dustbin;
var boxleft , boxright , boxbase

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    //Create the Bodies Here.
	
	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	paperObject=new paper(200,450,40);
		
	Engine.run(engine);
  
	boxleft = createSprite(550,600,20,100,{isStatic:true})
	boxleft.shapeColor = "red";
	World.add(world,boxleft);
	boxright = createSprite(750,600,20,100,{isStatic:true})
	boxright.shapeColor = "red";
	World.add(world,boxright);
	boxbase = createSprite(650,650,220,20,{isStatic:true})
	boxbase.shapeColor = "red";
	World.add(world,boxbase);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  paperObject.display();
  groundObject.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

}

