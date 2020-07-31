var playerCount, gameState;
var player, game, form;
var runner1, runner2, runner3, runner4;
var runners;
var allPlayers;
var track, trackPosition;
var player1IMG, player2IMG, player3IMG, player4IMG;
function preload(){
    
}
function setup() {
  createCanvas(windowWidth,windowHeight);
//     gameState = 0;
//     playerCount = 0;
 player1IMG = createSprite(windowWidth/2, windowHeight/2, 20, 50);
    // game = new Game();
    // game.start();

}

function draw() {
  
//   if(playerCount === 4){
//     game.updateState(1);
// }
// if(gameState === 1){
//   game.play(); 
// }
// if(gameState === 2){
//     game.end();
// }  
    
  drawSprites();
}