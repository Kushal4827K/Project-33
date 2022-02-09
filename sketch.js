const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;

var box1,ground;
var polygon_img, engine,world;
var sling;
var score=0
function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    // 1 stand
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);
    // 2 stand
    box17 = new Box(640,175,30,40);
    box18 = new Box(670,175,30,40);
    box19 = new Box(700,175,30,40);
    box20 = new Box(730,175,30,40);
    box21 = new Box(760,175,30,40);
    box22 = new Box(670,135,30,40);
    box23 = new Box(700,135,30,40);
    box24 = new Box(730,135,30,40);
    box25 = new Box(700,95,30,40);
    polygon = Bodies.circle(50,200,20);

    World.add(world,polygon);
    sling = new Slingshot(this.polygon,{x:100,y:200});
    
}

function draw(){
    background("pink");
    textSize(20);
    text("Drag the poly to hit the blocks",50,20);
    text(mouseX + ',' + mouseY, 10, 15);
    text("SCORE : "+score,650,40);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,350);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();
    box25.display();
    box25.score();
    sling.display();
    stand1.display();
    ground.display();
    stand2.display();
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(this.polygon);
    }
}
