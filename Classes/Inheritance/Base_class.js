class Shape {
  constructor(lineCount) {
    this.lineCount = lineCount;
  }
}

class Square extends Shape {
  constructor(sideLenth) {
    super(100);
    this.sideLenth = sideLenth;
  }
}

let square = new Square(5);
console.log(square.lineCount);
console.log(square.sideLenth);
