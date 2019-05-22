interface Shape{
  x: number;
  y: number;
}

function calcShape(a: Shape, b: Shape):void{
  console.log(a);
  console.log(b);
}

class Shape{
  x: number;
  y: number;
}

let s2=new Shape();

calcShape(
  {x: 12, y: 88},
  s2
);
