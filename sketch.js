const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var polygon
var chain

function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground1=new Ground(600,450,200,20)
    box=new Box(530,420,25,40)
    box1= new Box(560,420,25,40)
    box2= new Box(590,420,25,40)
    box3= new Box(620,420,25,40)
    box4= new Box(650,420,25,40)
    box5= new Box(680,420,25,40)

    box6= new Box(545,380,25,40)
    box7= new Box(575,380,25,40)
    box8= new Box(605,380,25,40)
    box9= new Box(635,380,25,40)
    box10= new Box(665,380,25,40)

    box11=new Box(560,340,25,40)
    box12= new Box(590,340,25,40)
    box13= new Box(620,340,25,40)
    box14= new Box(650,340,25,40)

    box15=new Box(575,300,25,40)
    box16=new Box(605,300,25,40)
    box17=new Box(635,300,25,40)

    box18=new Box(590,260,25,40)
    box19=new Box(620,260,25,40)

    box20= new Box (605,220,25,40)

    polygon=new hexagon(150,height/2)
    chain=new SlingShot(polygon.body,{x:150,y:200})













}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    ground1.display();
    fill("pink")
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    

    fill("blue")
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();

    fill("green")
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    fill("red")
    box15.display();
    box16.display();
    box17.display();

    fill("purple")
    box18.display();
    box19.display();

    fill("yellow")
    box20.display();

    polygon.display();
    chain.display();

    fill("white")

    textSize(20); 
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30); 
    text("Press Space to get a second chance",100,60);
    
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

    chain.fly()
}

function keyPressed(){

    if(keyCode===32){
        chain.attach(polygon.body)
    }
}