class MyGraphicsPrimitive2D {
  point1: Array<number>;
  point2: Array<number>

  offset(x?:number, y?:number){
    this.point1[1] = this.point1[1] + x
    this.point2[1] = this.point2[1] + x
    this.point1[2] = this.point1[2] + y
    this.point2[2] = this.point2[2] + y
  }
}

class MyAreaPrimitive2D extends MyGraphicsPrimitive2D{
  square():number{
    const width = Math.abs(this.point2[1] - this.point1[1])
    const heidth = Math.abs(this.point2[2]-this.point1[2])
    return width*heidth
  }
  
}

class MyCircle extends MyAreaPrimitive2D{
  center: number[];
  radius: number
}

class MyRectangle extends MyAreaPrimitive2D{
  width:number;
  haidth: number
}
