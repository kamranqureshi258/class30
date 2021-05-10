class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  this.visiblity=255
  }

  display(){
   var pos=this.body.position
    console.log(this.body.speed)
 if(this.body.speed<3){
  super.display();
 }else{
   push()
   World.remove(world,this.body)
  tint (255,this.visiblity)
  this.visiblity=this.visiblity-5;
   image(this.image,pos.x,pos.y,this.width,this.height);
  pop()
  }
  }
};