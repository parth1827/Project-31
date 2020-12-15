const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, box21,box22,box23;
var box24, box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45;
var box46, box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,box60,box61,box62,box63,box64,box65,box66,box67;
var box68,box69,box70,box71,box72,box73,box74,box75,box76,box77,box78,box79,box80,box81;
var ground;
var ball,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
var block1,block2,block3,block4,block5,block6,block7;

function setup() {
  createCanvas(600, 630);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(30, 50, 10);
  box2 = new Box(80, 50, 10);
  box3 = new Box(130,50, 10);
  box4 = new Box(180,50,10);
  box5 = new Box(230,50,10);
  box6 = new Box(280,50,10);
  box7 = new Box(330,50,10);
  box8 = new Box(380,50,10);
  box9 = new Box(430,50,10);
  box10 = new Box(480,50,10);
  box11 = new Box(530,50,10);
  box12 = new Box(580,50,10);
  box13 = new Box(55,90,10);
  box14 = new Box(105,90,10);
  box15 = new Box(155,90,10);
  box16 = new Box(205,90,10);
  box17 = new Box(255,90,10);
  box18 = new Box(305,90,10);
  box19 = new Box(355,90,10);
  box20 = new Box(405,90,10);
  box21 = new Box(455,90,10);
  box22 = new Box(505,90,10);
  box23 = new Box(555,90,10);
  box24 = new Box(30,130,10);
  box25 = new Box(80,130,10);
  box26 = new Box(130,130,10);
  box27 = new Box(180,130,10);
  box28 = new Box(230,130,10);
  box29 = new Box(280,130,10);
  box30 = new Box(330,130,10);
  box31 = new Box(380,130,10);
  box32 = new Box(430,130,10);
  box33 = new Box(480,130,10);
  box34 = new Box(530,130,10);
  box35 = new Box(580,130,10);
  box36 = new Box(55,170,10);
  box37 = new Box(105,170,10);
  box38 = new Box(155,170,10);
  box39 = new Box(205,170,10);
  box40 = new Box(255,170,10);
  box41 = new Box(305,170,10);
  box42 = new Box(355,170,10);
  box43 = new Box(405,170,10);
  box44 = new Box(455,170,10);
  box45 = new Box(505,170,10);
  box46 = new Box(555,170,10);
  box47 = new Box(30,210,10);
  box48 = new Box(80,210,10);
  box49 = new Box(130,210,10);
  box50 = new Box(180,210,10);
  box51 = new Box(230,210,10);
  box52 = new Box(280,210,10);
  box53 = new Box(330,210,10);
  box54 = new Box(380,210,10);
  box55 = new Box(430,210,10);
  box56 = new Box(480,210,10);
  box57 = new Box(530,210,10);
  box58 = new Box(580,210,10);
  box59 = new Box(55,250,10);
  box60 = new Box(105,250,10);
  box61 = new Box(155,250,10);
  box62 = new Box(205,250,10);
  box63 = new Box(255,250,10);
  box64 = new Box(305,250,10);
  box65 = new Box(355,250,10);
  box66 = new Box(405,250,10);
  box67 = new Box(455,250,10);
  box68 = new Box(505,250,10);
  box69 = new Box(555,250,10);
  box70 = new Box(30,290,10);
  box71 = new Box(80,290,10);
  box72 = new Box(130,290,10);
  box73 = new Box(180,290,10);
  box74 = new Box(230,290,10);
  box75 = new Box(280,290,10);
  box76 = new Box(330,290,10);
  box77 = new Box(380,290,10);
  box78 = new Box(430,290,10);
  box79 = new Box(480,290,10);
  box80 = new Box(530,290,10);
  box81 = new Box(580,290,10);

  ball = new Ball(100, 20, 10, 80);
  ball1 = new Ball(200,20,10,80);
  ball2 = new Ball(300,20,10,80);
  ball3 = new Ball(400,20,10,80);
  ball4 = new Ball(500,20,10,80);
  ball5 = new Ball(590,20,10,80);
  ball6 = new Ball(150,20,10,80);
  ball7 = new Ball(250,20,10,80);
  ball8 = new Ball(350,20,10,80);
  ball9 = new Ball(450,20,10,80);
  ball10 = new Ball(550,20,10,80);

  block1 = new Block(80,515,2,150);
  block2 = new Block(150,515,2,150);
  block3 = new Block(220,515,2,150);
  block4 = new Block(290,515,2,150);
  block5 = new Block(360,515,2,150);
  block6 = new Block(430,515,2,150);
  block7 = new Block(500,515,2,150);

}

function draw() {
  background(180);
  Engine.update(engine);

  ground.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
  box57.display();
  box58.display();
  box59.display();
  box60.display();
  box61.display();
  box62.display();
  box63.display();
  box64.display();
  box65.display();
  box66.display();
  box67.display();
  box68.display();
  box69.display();
  box70.display();
  box71.display();
  box72.display();
  box73.display();
  box74.display();
  box75.display();
  box76.display();
  box77.display();
  box78.display();
  box79.display();
  box80.display();
  box81.display();

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
