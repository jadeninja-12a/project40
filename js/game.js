class Game{
    constructor(){

    }

    async start(){
        if(gameState == 0){
            player = new Player();
            trackPosition = windowWidth + (windowWidth * 10);
            form = new Form();
            form.display();
            runner1 = createSprite(100, 300, 40, 40);
            runner2 = createSprite(300, 300, 40, 40);
            runner3 = createSprite(500, 300, 40, 40);
            runner4 = createSprite(700, 300, 40, 40);
            runners = [runner1, runner2, runner3, runner4]
        }
    }
    play(){
        form.hide();
        // Player.getPlayersInfo();
        // imageMode(CENTER);
        // image(track, trackPosition, windowHeight/2, windowWidth * 20, windowHeight);
        var invisibleLine = createSprite(camera.x, displayHeight/2 + 100, )
        if(allPlayers != undefined){
            var index = 0;
            var x = 0;
            var y = displayHeight/5;
            for(var plr in allPlayers){
                y+=displayHeight/5;
                index+=1;
                x = -displayWidth + allPlayers[plr].distance;
                runners[index - 1].x = x;
                runners[index - 1].y = y;
                textSize(22);
                fill("red");
                text(allPlayers[plr].name, x, y-60 );
                
                if (index == player.index){
                    camera.position.y = windowHeight/2;
                    camera.position.x = runners[index-1].x;                    
                }
                if(keyIsDown(RIGHT_ARROW) && player.index != null){
                    player.distance+= 50;
                    trackPosition -= 1;
                    player.playing();
                }
                if(keyIsDown(UP_ARROW) && player.index != null){
                    player.velocityY = -20;
                }
                player.velocityY += 2.5;

                drawSprites();
            }
    }
    // end(){

    //}
    }
}
