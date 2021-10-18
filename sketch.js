/*const Engine= Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
const Bodies=Matter.Bodies
*/

var girl, girlStill,girlRunning, girlRunningImg, girlRunningRight, girlRunningRightImg, girlRunningLeft,girlRunningLeftImg
var coin, coinImg
var life=3, lifeImg_3, lifeImg_2, lifeImg_1, lifeImge_0,lifeObj
var power, powerImg
var stone1,stone2,stone3,stone4, stoneImg1, stoneImg2, stoneImg3, stoneImg4
var score=0;

var burst
//var PLAY=1, SERVE=0, END=2
var gameState='serve';

var forest, forestImg
var coinCount=0;

function preload(){
stoneImg1=loadImage("images/stone-img2.gif")
stoneImg2=loadImage("images/stone-img3.gif")
stoneImg3=loadImage("images/stone-img5.gif")
stoneImg4=loadImage("images/stone-img6.gif")
girlStill=loadAnimation("girl-img1-unscreen/1.png")
girlRunningImg=loadAnimation("girl-img1-unscreen/1.png","girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
girlRunningRightImg=loadAnimation("girl-img1-unscreen/unscreen-037.png","girl-img1-unscreen/unscreen-038.png","girl-img1-unscreen/unscreen-039.png","girl-img1-unscreen/unscreen-040.png","girl-img1-unscreen/unscreen-041.png","girl-img1-unscreen/unscreen-042.png","girl-img1-unscreen/unscreen-043.png","girl-img1-unscreen/unscreen-044.png","girl-img1-unscreen/unscreen-045.png","girl-img1-unscreen/unscreen-046.png","girl-img1-unscreen/unscreen-047.png","girl-img1-unscreen/unscreen-048.png","girl-img1-unscreen/unscreen-049.png","girl-img1-unscreen/unscreen-050.png","girl-img1-unscreen/unscreen-051.png","girl-img1-unscreen/unscreen-052.png")
girlRunningLeftImg=loadAnimation("girl-img1-unscreen/1.png","girl-img1-unscreen/unscreen-002.png","girl-img1-unscreen/unscreen-003.png","girl-img1-unscreen/unscreen-004.png","girl-img1-unscreen/unscreen-005.png","girl-img1-unscreen/unscreen-006.png","girl-img1-unscreen/unscreen-007.png","girl-img1-unscreen/unscreen-008.png","girl-img1-unscreen/unscreen-009.png","girl-img1-unscreen/unscreen-010.png","girl-img1-unscreen/unscreen-011.png","girl-img1-unscreen/unscreen-012.png","girl-img1-unscreen/unscreen-013.png","girl-img1-unscreen/unscreen-014.png","girl-img1-unscreen/unscreen-015.png","girl-img1-unscreen/unscreen-016.png","girl-img1-unscreen/unscreen-017.png","girl-img1-unscreen/unscreen-018.png","girl-img1-unscreen/unscreen-019.png","girl-img1-unscreen/unscreen-020.png","girl-img1-unscreen/unscreen-021.png","girl-img1-unscreen/unscreen-022.png","girl-img1-unscreen/unscreen-023.png")
coinImg=loadAnimation("coinImages-converted/coinImg-unscreen/unscreen-001.png","coinImages-converted/coinImg-unscreen/unscreen-002.png","coinImages-converted/coinImg-unscreen/unscreen-003.png","coinImages-converted/coinImg-unscreen/unscreen-004.png","coinImages-converted/coinImg-unscreen/unscreen-005.png","coinImages-converted/coinImg-unscreen/unscreen-006.png","coinImages-converted/coinImg-unscreen/unscreen-007.png","coinImages-converted/coinImg-unscreen/unscreen-008.png","coinImages-converted/coinImg-unscreen/unscreen-009.png","coinImages-converted/coinImg-unscreen/unscreen-010.png","coinImages-converted/coinImg-unscreen/unscreen-011.png","coinImages-converted/coinImg-unscreen/unscreen-012.png","coinImages-converted/coinImg-unscreen/unscreen-013.png","coinImages-converted/coinImg-unscreen/unscreen-014.png","coinImages-converted/coinImg-unscreen/unscreen-015.png","coinImages-converted/coinImg-unscreen/unscreen-016.png","coinImages-converted/coinImg-unscreen/unscreen-017.png","coinImages-converted/coinImg-unscreen/unscreen-018.png","coinImages-converted/coinImg-unscreen/unscreen-019.png","coinImages-converted/coinImg-unscreen/unscreen-020.png","coinImages-converted/coinImg-unscreen/unscreen-021.png","coinImages-converted/coinImg-unscreen/unscreen-022.png",)
//powerImg=loadImage("images/energyDrink.png")
//lifeImg=loadImage("images/statusBar-img1-removebg-preview.png")
//lifeImg_1=loadImage("images/statusBar-img1-removebg-preview.png")
//lifeImg_2=loadImage("images/statusBar-img2-removebg-preview.png")
//lifeImg_3=loadImage("images/statusBar3.png")
//lifeImg_0=loadImage("images/statusBar-img4-removebg-preview.png")
forestImg=loadImage("images/background-img.jpg")

//bst=loadImage("images/head.png")
//remove background
//girlImg=loadImage("images/girlRunning-img.gif")
    
}
function setup(){
createCanvas(displayWidth,displayHeight)
//forest=createSprite(displayWidth/2-15,displayHeight/2,displayWidth+200,displayHeight+500)
//forest.addImage(forestImg)

 girl=createSprite(displayWidth/2,displayHeight-200,20,20)
 //lifeObj=createSprite(displayWidth-100,displayHeight-500, 50,10)
 //lifeObj.addImage(lifeImg_1)
//girl.addImage(girlImg)
//girl.addAnimation("running", girlRunningImg)

girl.addAnimation("still", girlStill)

girl.scale=1

//forest.scale=2

girl.addAnimation("runningRight", girlRunningRightImg)
girl.addAnimation("runningLeft", girlRunningLeftImg)
girl.addAnimation("running", girlRunningImg)
girl.setCollider('circle',0,0,35)
//girl.debug=true
//createGroups for coind and other 
coinGrp=new Group()
stoneGrp=new Group()

}

function draw(){
    background(forestImg)
    textSize(30)
    strokeWeight(3)
    fill("red")
    
    text("Score: "+score, displayWidth-150,50)
    text("Lives: "+life,  displayWidth-150,75)
    text("Coin: "+coinCount, displayWidth-150,100)
   
    if(gameState==="serve")
    {
    
        text("PRESS SPACE TO BEGIN", displayWidth/2-120, displayHeight/2-100 )  
    }
    else if(gameState==="end"){
      text("Game over",150,250)

      text("Press R to restart",100,300)
      girl.changeAnimation("still")
      girl.velocityY=0

    }
    else{
      gamePlay()
      

    }
    drawSprites()
    if(keyDown("space"))
    {
      if(gameState==="serve")

      {
        gameState="play"
        
      }
       
    }
    if(keyDown("r"))
    {
     // gameState==='end'
      reset()
    }

   /* if(coinGrp.isTouching(girl))
    {
      score=score+10
    }*/
}

function gamePlay()
{
  score = score + Math.round(getFrameRate()/60);

girl.changeAnimation('running')


//coinGrp.setVelocityYEach(1)
//stoneGrp.setVelocityYEach(1)
spawnCoins()
spawnStones()
if(life<=0)
{
  gameState='end'

 }

if(score<=300)
{
  girl.velocityY=-0.2
}

 //girl.visible=true;
if(keyDown("RIGHT_ARROW"))
{
  girl.changeAnimation("runningRight")
  girl.x+=10
}
if(keyDown("LEFT_ARROW"))
{
 girl.changeAnimation("runningLeft")
  girl.x-=10
}

}



function spawnCoins()
    {
        if(frameCount%200===0)
        {
 coin=createSprite(Math.round(random(50,displayWidth-50)),-50)
      coin.addAnimation("coinImg",coinImg)
      
      coin.scale=0.1
      coin.lifetime=250;
      coin.velocityY=2
      coin.depth = girl.depth;
      girl.depth +=1;
     
    coinGrp.add(coin)  
    }
    coinGrp.overlap(girl,coin_t)
    }
function coin_t(cn)
{
  cn.remove()
  coinCount+=1
}
    function spawnStones()
    {
        if(frameCount%200===0)
        {
      stone=createSprite(Math.round(random(50,displayWidth-50)),-50)
      var rand=Math.round(random(1,4))
      stone.velocityY=3
      switch(rand)
      {
          case 1:stone.addImage(stoneImg1)
          break;
          case 2:stone.addImage(stoneImg2)
          break;
          case 3:stone.addImage(stoneImg3)
          break;
          case 4:stone.addImage(stoneImg4)
          break;
          default:
      }
      stone.depth = girl.depth;
      girl.depth +=1;
     
      stone.scale=0.3
      stone.lifetime=250;
      stoneGrp.add(stone)
        }
         stoneGrp.overlap(girl,stone_t)
         
        }
  function stone_t(sn)
  {
    sn.remove()
    life-=1
 // busrt=createSprite(girl.x,girl.y,30,30)
  //busrt.addImage(bst)
  //bst.scale=0.5
  //bst.lifetime=-2
    }


    function reset(){
      gameState = "play";
     
      girl.x=displayWidth/2
girl.y=displayHeight-200
      coinGrp.destroyEach();
      stoneGrp.destroyEach();
      
      girl.changeAnimation("still");
      
      score = 0;
      life=3
      coinCount=0
    }
