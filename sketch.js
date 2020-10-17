const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Platform;
var box1,box2;
var ground;
var dustbin;

function keyPressed(){
    if (keyCode === UP_ARROW){

        Matter.Body.applyForce (ball.body,ball.body.position,{x:10,y:-10});
    }
}
function preload(){
    dustbin= loadImage ("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1600,600); 
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,590,2300,20,"yellow");
    box1 = new Ground(1300,580,200,20,"olive");
    box2 = new Ground(1200,530,20,100,"olive");
    box3= new Ground(1400,530,20,100,"olive");
    ball=new Ball (100,500);    
}
function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ball.display();
   ground.display();
   imageMode(CENTER);
   image(dustbin, 1300, 530, 230, 120); 
}
