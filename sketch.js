var diary, diaryImg;
var voldemortImg, voldemort;
var obstacles, obstacleImg;
var gameState = 1;
var edges;
var wall1,wall2,wall3,wall4;
var bg;

function preload(){
diaryImg = loadImage('images/TM Diary.jpg');
voldemortImg = loadImage('images/voldemort.jpg');
obstacleImg = loadImage('images/Albus.png');
bg = loadImage('images/bg.jpg')
}

function setup(){
createCanvas(900,600);
diary = createSprite(100,300,10,10);
diary.addImage(diaryImg);
diary.scale = 0.5;
voldemort = createSprite(800,300,10,10);
voldemort.addImage(voldemortImg);
voldemort.scale = 0.5;
obstacles = createSprite(350,300,10,5);
obstacles.addImage(obstacleImg);
obstacles.scale=0.25;
obstacles.velocityY=10;
//obstacles.debug = true;
//obstacles.setCollision(rectangle,0,0,20,20)
wall1=createSprite(100,10,1800,10)
wall2=createSprite(10,10,10,1540)
wall3=createSprite(10,590,1800,10)
wall4=createSprite(200,10,1800,10)
}

function draw(){
background(bg);
if (gameState === 1){
    
    edges=createEdgeSprites();
    
    
    

diary.bounceOff(wall1);
diary.bounceOff(wall2);
diary.bounceOff(wall3);
diary.bounceOff(wall4);

obstacles.bounceOff(wall1);
obstacles.bounceOff(wall2);
obstacles.bounceOff(wall3);
obstacles.bounceOff(wall4);



if(keyDown('d')){
    diary.velocityX = 7;
}

if(keyDown('a')){
    diary.velocityX=-7;
}

if(keyDown('w')){
    diary.velocityY=-7;
}

if(keyDown('s')){
    diary.velocityY=7;
}

}

if(diary.isTouching(obstacles)){
    diary.velocityX=0;
    diary.velocityY=0;
    obstacles.velocityY = 0;
    textSize(30);
    stroke("blue");
    text(" YOU LOST!", 400, 300)
}

if(diary.isTouching(voldemort)){
    diary.velocityX=0;
    diary.velocityY=0;
    obstacles.velocityY=0;
    textSize(30);
    stroke("blue");
    text("YOU WON!", 400, 300)
}




textSize(30);
stroke("yellow");
text("DELIVER THE DIARY!, USE WASD TO MOVE ;)", 100, 50);

textSize(20);
stroke("yellow");
text("W - UP A- LEFT S-DOWN D-RIGHT", 500,90)

drawSprites();
}