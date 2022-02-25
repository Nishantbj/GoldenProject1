
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  bg = loadImage("./Assets/bg.png");
  boyImg = loadAnimation("./Assets/boy1.png", "./Assets/boy2.png", "./Assets/boy3.png", "./Assets/boy4.png")
  boyStd = loadAnimation("./Assets/boy4.png")
  startingPoint = loadImage("./Assets/startingPoint.png");
  floatingIsland1 = loadImage("./Assets/floatingIsland1.png");
  floatingIsland2 = loadImage("./Assets/floatingIsland2.png");

}

function setup() {
  engine = Engine.create()
  world = engine.world
  canvas = createCanvas(windowWidth, windowHeight);
  //boy = new Boy(100, height - 200)
  boy = createSprite(100, height - 300)
  boy.scale = 0.6
  imageMode (CENTER)
  boy.addAnimation("standiing", boyStd)
  boy.addAnimation("walking", boyImg)
  float1 = new Ground(100, height - 250, 150, 250, startingPoint)
  float1s = createSprite(100, height - 230, 100, 30)
  float1s.visible = false
}

function draw() {
  background(255);
  image(bg,width/2,height/2,width,height)
  textSize(30)
  fill ("white")
  text ("Press Space To Start",width/2-100,50)
  
  if (keyIsDown(RIGHT_ARROW)) {
    boy.changeAnimation("walking")
    boy.position.x+=2
  }
  if (keyIsDown(LEFT_ARROW)) {
    boy.changeAnimation("walking")
    boy.position.x-=2
  }
  console.log(boy.y)
  
  if (keyDown("space")&&boy.y>float1s.y-200) {
    boy.velocityY =-10
    console.log("spaceWorking")
    boy.changeAnimation("walking")
  }
  
  boy.velocityY = boy.velocityY+1
  boy.collide(float1s)
 // boy.position.y+=1
  //boy.show()
  
  float1.show()
  drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
