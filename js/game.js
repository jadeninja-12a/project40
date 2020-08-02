class Game{
    constructor(){

    }

    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){

        if(gameState == 0){
                player = new Player();
                var playerCountRef = await database.ref("playerCount").once("value");
                if(playerCountRef.exists()){
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
            trackPosition = windowWidth + (windowWidth * 10);
            form = new Form();
            form.display();
            runner1 = createSprite(100, 300, 10, 60);
            runner2 = createSprite(300, 300, 10, 60);
            runner3 = createSprite(500, 300, 10, 60);
            runner4 = createSprite(700, 300, 10, 60);
            runners = [runner1, runner2, runner3, runner4]
            hurdles = [];
        }
    }
    play(){
        
        form.hide();
        Player.getPlayersInfo();
        // imageMode(CENTER);
        // image(track, trackPosition, windowHeight/2, windowWidth * 20, windowHeight);
        var invisibleLine = createSprite(camera.x, displayHeight/2 + 100, displayWidth, 1);
        invisibleLine.visible = true;
        var currentRunner = runners[player.index - 1];
        currentRunner.shapeColor = "green";
        for(var i = 0; i <= 3; i++){
            if(i != (player.index-1)){
                runners[i].visible = false;
            }
        }
        if(allPlayers != undefined){

                textSize(22);
                fill("red");
                text(player.name, currentRunner.x, currentRunner.y-60 );
                    currentRunner.x = player.distance + displayHeight/2;
                
                    camera.position.y = windowHeight/2;
                    camera.position.x = currentRunner.x;                    
                
                if(keyIsDown(RIGHT_ARROW) && player.index != null){
                    player.distance+= 25;
                    trackPosition -= 1;
                    
                }
                player.playing();
                if(keyIsDown(UP_ARROW) && player.index != null){
                    currentRunner.velocityY = -20;
                }
                currentRunner.velocityY += 2.5;
                currentRunner.collide(invisibleLine);
                for(var i = 0; i<=20; i++){
                    hurdles[i] = new Hurdle(i * 200 + 1000 ,displayHeight/2 + 75);
                    hurdles[i].shapeColor = "black";
                }
                for(var hurdle in hurdles){
                    if(hurdles[hurdle].didCrash(currentRunner)){
                        gameState = 2;
                        player.rank = -1;
                        
                    }
                }
                player.update();
    }
    drawSprites();
}
    end(){
        Player.getPlayersInfo();
        if(player.rank != -1){
        var rank = 1;
        for(var plr in allPlayers){
            if(allPlayers[plr].isFinished == true){
                rank++;
            }
        }
        
        player.isFinished = true;
        player.rank = rank;
        player.score += rank * 10000;
       }

    background(255, 255,255);
        
        var title = createElement("h1");
        title.html("HURDLE RACING GAME");
        title.position(displayWidth/2 + 250, displayHeight/2 - 400);
        var title2 = createElement("h2");
        title2.html("LeaderBoard");
        title2.position(displayWidth/2 + 300, displayHeight/2 - 250);
        player.update();
        var greeting = createElement("h3");
        greeting.position(displayWidth/2 + 150, displayHeight/2 );
        if(player.rank != -1){
        var rank = createElement("h3");
        rank.html(player.rank + ". " + player.name + ", score : " + player.score);
        rank.position(displayWidth/2 + 350, displayHeight/2 - 100);
       
        if(player.rank == 1){
            greeting.html("CONGRATULATIONS, You have reached the end first");
        } else {
            greeting.html("CONGRATULATIONS, You have reached the end(but your not first LOSER)");
        }
        }
        greeting.html("You have not finished the race loser");
    }

}
