class Hurdle{
    constructor(x, y){
        this.hurdle = createSprite(x, y, 20, 50); 
    }
    display(){
        this.hurdle.draw();
    }
    didCrash(p){
        return isTouching(p, this.hurdle);
    }
}