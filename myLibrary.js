function isTouching(sprite1, sprite2){

    if ((sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
      && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2) && 
      (sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
      && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2)) {
      return true;
    } 
      return false;
    
  }
  function bounceOff(sprite1, sprite2){
      if(isTouching(sprite1, sprite2)){
          sprite1.VelocityX = -sprite1.VelocityX
          sprite1.VelocityY = -sprite1.VelocityY
      }
  }
  function collide(sprite1, sprite2){
    if(isTouching(sprite1, sprite2)){
      sprite1.VelocityX = 0;
      sprite2.VelocityY = 0;
    }
  }
  function moveSprite(sprite){
    sprite.x += sprite.VelocityX;
    sprite.y += sprite.VelocityY;
  }