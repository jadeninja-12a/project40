class Form{
    constructor(){
        this.input = createInput("UserName");
        this.button = createButton("Join");
        this.greeting = createElement("h3");
        this.greeting2 = createElement("h3");
        this.title = createElement("h1");
    }

    display(){
       
        this.title.html("SPACE RACING GAME");
        this.title.position(displayWidth/2 + 250, displayHeight/2 - 400);
      
        this.input.position(displayWidth/2 + 300, 350);
      
        this.button.position(displayWidth/2 + 350, 500);
       
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount ++;
            player.index = playerCount;
            player.update();
            player.updatePlayerCount(playerCount);
            this.greeting.html("Hey " + player.name + ". You have just entered the " );
            this.greeting2.html("SPACE GAME");
            this.greeting.position(displayWidth/2 + 250, 350);
            this.greeting2.position(displayWidth/2 + 250, 380);
        });
        
    }
    hide(){
        this.title.hide();
        this.greeting2.hide();
        this.greeting.hide();
    }
}