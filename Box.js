class Box {
    constructor(x,y,width,height){
    var option = {
    restitution : 0,
    friction : 1,
    density : 0.04
    }
    
    this.visiblity = 255
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.height = height;
    this.width = width;
    this.score = 0
    World.add(world,this.body);
    }
    
      

    display(){
    var angle = this.body.angle;
   
    if(this.body.speed < 6){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    strokeWeight(7);
    rectMode(CENTER);
    fill("cyan");
    rect(0,0,this.width,this.height);
    pop();
    } else{
   World.remove(world,this.body);
   push();
   this.visiblity = this.visiblity - 5;
   tint(0,this.visiblity-5);
   pop();

    }
    }

}