class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
    }

    getPlayerCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        });
    }

    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance:this.distance,
            rank:this.rank
        });
    }
    static getPlayersInfo(){
        database.ref("players").on("value", function(data){
            allPlayers = data.val();
        });
    }
}