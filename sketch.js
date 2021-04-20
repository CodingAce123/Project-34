const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
    box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;
var engine,world
 
function preload(){
bg = loadImage("images/backgroundImage.png");
}

function setup(){
createCanvas(1400,650);
engine = Engine.create();
world = engine.world;

//Creating Hero
hero = new Hero(400,800,250);
//Creating Monster
monster = new Monster(1100,550,300);
//Creating Rope
rope = new Rope(hero.body,{x: 500,y: 50 });
//Creating Ground
ground = new Ground(600,600,1500,20);

//Creating The Boxes- Stack 1
box1 = new Box(900,100,70,70);
box2 = new Box(900,100,70,70);
box3 = new Box(900,100,70,70);
box4 = new Box(900,100,70,70);
box5 = new Box(900,100,70,70);
box6 = new Box(900,100,70,70);
box7 = new Box(900,100,70,70);

//Creating The Boxes- Stack 2
box8 = new Box(800,100,70,70);
box9 = new Box(800,100,70,70);
box10 = new Box(800,100,70,70);
box11 = new Box(800,100,70,70);
box12 = new Box(800,100,70,70);

//Creating The Boxes- Stack 3
box13 = new Box(700,100,70,70);
box14 = new Box(700,100,70,70);
box15 = new Box(700,100,70,70);
box16 = new Box(700,100,70,70);
box17 = new Box(700,100,70,70);
box18 = new Box(700,100,70,70);
box19 = new Box(700,100,70,70);
box20 = new Box(700,100,70,70);

//Creating The Boxes- Stack 4
box21 = new Box(600,100,70,70);
box22 = new Box(600,100,70,70);
box23 = new Box(600,100,70,70);
box24 = new Box(600,100,70,70);
box25 = new Box(600,100,70,70);
box26 = new Box(600,100,70,70);
}

function draw(){
background(bg);
Engine.update(engine);

strokeWeight(4);
textSize(30);
fill("red")
textFont("Arial")
text("Drag the Mouse to Move the Superman,And Kill The Monster",10,30);

//Displaying The Hero
hero.display();
//Displaying The Monster
monster.display();
//Displaying The Rope
rope.display();
//Displaying The Ground
ground.display();

//Displaying The Boxes- Stack 1
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
//Displaying The Boxes- Stack 2
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
//Displaying The Boxes- Stack 3
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
//Displaying The Boxes- Stack 4
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

