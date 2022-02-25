class Ground {
    constructor(x,y,w,h,image){
      var options = {
          isStatic:true

      } 
      this.body = Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      this.width = w
      this.height = h
      this.image = image

    }
    show(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}