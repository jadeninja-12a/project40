class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
        this.timeTaken = 0;
        this.score = 0;
        this.isFinished = false;
    }
    playing(){
        
        this.timeTaken ++;
        this.score = this.distance;
    }
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }
    getRunnersFinished(){
        database.ref("runnersFinished").on("value", function(data){
            runnersFinished = data.val();
        });
        console.log(carsFinished);
    }
    updateRunnersFinished(car){
        database.ref("/").update({
          runnersFinished: car
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance:this.distance,
            rank:this.rank,
            isFinished:this.isFinished,
            score:this.score,
            timeTaken:this.timeTaken
        });
    }
    static getPlayersInfo(){
        database.ref("players").on("value", function(data){
            allPlayers = data.val();
        });
    }
}