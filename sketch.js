var ground;

var hammer;

var rubber;

var stone;

var sand1, sand2, sand3, sand4, sand5, sand6;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);

//	groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	var ground_options ={
       isStatic: true
    }


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 580, width, 20 , {isStatic:true} );
	World.add(world, ground);

	stone = new Stone (100,60,50,50);
	hammer = new Hammer (150,50,100,50);
	sand1 = new Sand (400,400,10);
	sand2 = new Sand (200,400,10);
	sand3 = new Sand (350,400,10);
	sand4 = new Sand (250,400,10);
	sand5 = new Sand (440,400,10);
	sand6 = new Sand (450,400,10);
	rubber = new Rubber (900,450,50);


	Engine.run(engine);

}


function draw() {
	//rectMode(CENTER);
	background("lightBlue");
	
	stone.display();
	hammer.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	rubber.display();




  drawSprites();
}



