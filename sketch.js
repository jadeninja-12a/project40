var database;
var playerCount, gameState;
var player, game, form;
var plane1, plane2;
var planes;
var distance;
var allPlayers;
var space;
var plane1IMG, plane2IMG;
var spacePosition;
function preload(){
    space = loadImage("../images/space.jpg");
    plane1IMG = loadImage("../images/black ship.jpg");
    plane2IMG = loadImage("../images/yellowblackship.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
    gameState = 0;
    playerCount = 0;
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
  
  if(playerCount === 2){
    game.updateState(1);
}
if(gameState === 1){
  background(0);  
  game.play();
    
}
if(gameState === 2){
    game.end();
}  
  
}