const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var stand, elastic;
var score;

function preload(){

	polygonImg = loadImage("polygon.png")
	
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(250,350,200,10);

    box1 = new Box(250,350,50,40);
    box2 = new Box(300,350,50,40);
    box3 = new Box(350,350,50,40);
    box4 = new Box(400,350,50,40);

    box5 = new Box(270,310,50,40);
    box6 = new Box(320,310,50,40);
    box7 = new Box(360,310,50,40);

    box8 = new Box(240,270,50,40);
    box9 = new Box(290,270,50,40);

    box10 = new Box(210,240,50,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    Bodies.circle(50,200,20);
    World.add(world,ball);
    elastic = new Elastic(this.ball,{x:100,y:200});

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
   

    image(polygonImg ,ball.position.x,ball.position.y,40,40)
    imageMode(CENTER) 

    text("Score:"+score,350,20);

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();

    stand.display();
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
    elastic.display();

    drawSprites();
 
}

function mouseDragged(){

    Matter.Body.setPosition(polygonImg, {x:mouseX,y:mouseY});

}

function mouseReleased(){
    elastic.fly()
}

function keyPressed(){
    
    if(keyCode === 32){
        elastic.attach(polygonImg)
    }
    }

    async function BackgroundColour(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=06 && hour<=19){
            background("yellow");
        }
        else{
            background(0, 0, 153);
        }
    
        
    }