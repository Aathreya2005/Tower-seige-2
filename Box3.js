class Box3 {
    constructor(x,y) {
      var options = {
          isStatic:false,
          density:0.5,
          friction:0.8
      }
      this.body = Bodies.rectangle(x,y,20,30,options);
      this.width =20
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
        if (this.body.speed<4){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
            
          }
          else{
            World.remove(world,this.body);
            push();
            this.visiblity-=5;
            tint(255,this.visiblity);
            pop();
          }
       
    }
  };