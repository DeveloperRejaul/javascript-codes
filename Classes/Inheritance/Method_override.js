class Shape {
  getArea() {
    return 0;
  }
}
class Square extends Shape {
  constructor(sideLenth) {
    super();
    this.sideLenth = sideLenth;
  }

  getArea() {
    if (this.sideLenth > 0) {
      return this.sideLenth * this.sideLenth;
    }
  }
}

let square = new Square(5);
let area = square.getArea();
area;
