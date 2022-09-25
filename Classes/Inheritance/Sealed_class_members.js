class Squre {
  constructor(sideLenth) {
    this.sideLenth = sideLenth;
  }

  getArea() {
    return this.sideLenth * this.sideLenth;
  }
}

let square = new Squre(5);

let area = square.getArea();

area;
