var database;
var playerCount, gameState;
var player, game, form;
var runner1, runner2, runner3, runner4;
var runners;
var allPlayers;
var track, trackPosition;
var runnersFinished, hurdles;
var player1IMG, player2IMG, player3IMG, player4IMG;
function preload(){
    
}
function setup(){
  createCanvas(windowWidth - 100,windowHeight - 200);
  database = firebase.database();
  gameState = 0;
  playerCount = 0;
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  console.log(gameState);
  if(playerCount === 4){
      game.updateState(1);
  }
  
  if(gameState === 1){
      background(255, 255, 255);
      clear();
      game.play();
  }
  if(gameState === 2){
      game.end();
  }
}