class Hurdle{
    constructor(x, y){
        this.hurdle = createSprite(x, y, 10, 50);
        this.hurdle.addImage(hurdleIMG);
        this.hurdle.setCollider("rectangle", 5, 20, 20, 100);
        this.hurdle.debug = true;
    }
    display(){
        this.hurdle.draw();
    }
    didCrash(p){
        return this.hurdle.isTouching(p);
    }
}