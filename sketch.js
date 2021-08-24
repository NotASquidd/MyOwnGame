var player1, player2, player1Img, player2Img;
var gun, bullet;
var bg, bgImg;

function preload(){
//player1Img = loadImage("assets/player1.png")
//player2Img = loadImage("assets/player2.jpg")


}

function setup() {
createCanvas(windowWidth,windowHeight);

player1 = createSprite(displayWidth-1159, displayHeight-300,50,50);
//player1.addImage(player1Img);
player1.scale = 0.5;
player1.debug = true;
player1.setCollider("rectangle",0,0,300,300);

player2 = createSprite(displayWidth-2159, displayHeight-400,100,100)
//player2.addImage(player2Img);
player2.scale = 0.5;
player2.debug = true;
player2.setCollider("rectangle",0,0,300,300);

}

function draw(){
background(255);

if(keyDown('d')){
 player1.velocityY = 0;
 player1.velocityX = 10;
}

if(keyDown('a')){
    player1.velocityY = 0;
    player1.velocityX = -10;
}



  drawSprites();
}
