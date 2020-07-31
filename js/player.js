class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
        this.timeTaken = 0;
        this.score = 0;
    }
    playing(){
        this.distance += 10;
        this.timeTaken ++;
        this.score = this.distance;
    }
}