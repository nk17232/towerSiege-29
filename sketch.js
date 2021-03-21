const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stand;
var block1, block2, bock3, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
stand = new Stand(110, 300, 600, 20);
//level one
block1 = new Block(120, 275, 30, 40);
block2 = new Block(150, 275, 30, 40);
block3 = new Block(180, 275, 30, 40);
block4 = new Block(210, 275, 30, 40);
block5 = new Block(240, 275, 30, 40);
block6 = new Block(270, 275, 30, 40);
block7 = new Block(300, 275, 30, 40);
//level two
block8 = new Block(330, 235, 30, 40);
block9 = new Block(360, 235, 30, 40);
block10 = new Block(390, 235, 30, 40);
block11= new Block(420, 235, 30, 40);
block12 = new Block(450, 235, 30, 40);
//level three
block13 = new Block(360, 195, 40, 30);
block14 = new Block(390, 195, 40, 30);
block15 = new Block(330, 195, 40, 30);
//level four
block16 = new Block(390, 155, 40, 30);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

   stand.display();
  
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

   

}

