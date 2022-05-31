function preload(){
  boyImage = loadImage("boy.png")
  ballImage = loadImage("ball.png")
  grassImage = loadImage("grass.png")
  goalpostImage = loadImage("goalpost.png")
  boy2Image = loadImage("boy2.png")
  goalkeeperImage = loadImage("goalkeeper.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  goalpost = createSprite(width/2,height/2+10,20,20)
  goalpost.addImage(goalpostImage)
  goalpost.scale = 1.75
  goalkeeper = createSprite(width/2,height/2+40,20,20)
  goalkeeper.addImage(goalkeeperImage)
  goalkeeper.scale = 0.6
  goalkeeper.velocityX = -2

  player1 = createSprite(width/2,height/2)
  player1.addImage(boy2Image)
  player1.scale = 0.2
  player1.x = Math.round(random(width/2-150,width/2+150))
  player1.y = Math.round(random(height/2+50,height-100))
  player1.velocityX = -2

  player2 = createSprite(width/2,height/2)
  player2.addImage(boy2Image)
  player2.scale = 0.2
  player2.x = Math.round(random(width/2-150,width/2+150))
  player2.y = Math.round(random(height/2+50,height-100))
  player2.velocityX = 3

  player3 = createSprite(width/2,height/2)
  player3.addImage(boy2Image)
  player3.scale = 0.2
  player3.x = Math.round(random(width/2-150,width/2+150))
  player3.y = Math.round(random(height/2+50,height-100))
  player3.velocityX = -2

  player4 = createSprite(width/2,height/2)
  player4.addImage(boy2Image)
  player4.scale = 0.2
  player4.x = Math.round(random(width/2-150,width/2+150))
  player4.y = Math.round(random(height/2+50,height-100))
  player4.velocityX = 2

  boy = createSprite(width/2,height-100,20,20)
  boy.addImage(boyImage)
  ball = createSprite(width/2+40,height-30,20,20)
  ball.addImage(ballImage)
  ball.scale = 0.2

  goalpost1 = createSprite(width/2+150,height/2+10,20,200)
  goalpost2 = createSprite(width/2-150,height/2+10,20,200)

  goalpost1.visible = false
  goalpost2.visible = false

   wall1= createSprite(width/2+500,height/1.75+10,20,250)
   wall2= createSprite(width/2-500,height/1.75+10,20,250)
  
   wall1.visible = false
   wall2.visible = false
  
  
  
}

function draw() {
  background(255,255,255);
  image (grassImage,0,0,width,height) 
  goalkeeper.bounceOff(goalpost1) 
  goalkeeper.bounceOff(goalpost2) 
  player1.bounceOff(wall1)
  player1.bounceOff(wall2)
  player2.bounceOff(wall1)
  player2.bounceOff(wall2)
  player3.bounceOff(wall1)
  player3.bounceOff(wall2)
  player4.bounceOff(wall1)
  player4.bounceOff(wall2)
  drawSprites();
}
