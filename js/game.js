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
                player.getPlayerCount();
            }
            spacePosition = windowWidth + (windowWidth * 10);
            form = new Form();
            form.display();
            plane1 = createSprite(100, 300, 40, 40);
            plane1.addAnimation("plane1", plane1IMG);
            plane2 = createSprite(300, 300, 40, 40);
            plane2.addAnimation("plane2", plane2IMG);
            planes = [plane1, plane2];
        }
    }
    play(){
        form.hide();
        Player.getPlayersInfo();
        imageMode(CENTER);
        image(space, spacePosition, windowHeight/2, windowWidth * 20, windowHeight);
        if(allPlayers != undefined){
            var index = 0;
            var x = 0;
            var y = windowHeight/3- 300;
            for(var plr in allPlayers){
                y+=windowHeight/3-300;
                index+=1;
                x = -displayWidth + allPlayers[plr].distance;
                planes[index - 1].x = x;
                planes[index - 1].y = y;
                textSize(22);
                fill("red");
                text(allPlayers[plr].name, x, y-60 );
                
                if (index == player.index){
                    camera.position.y = windowHeight/2;
                    camera.position.x = planes[index-1].x;                    
                }
                if(keyIsDown(RIGHT_ARROW) && player.index != null){
                    player.distance+= 50;
                    spacePosition -= 1;
                    player.update();
                }
                drawSprites();
            }
    }
    // end(){

    // }
    }
}
