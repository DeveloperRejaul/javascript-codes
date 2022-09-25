class Shape {
  get lineCount() {
    return 0;
  }
}

class Squre extends Shape {
  get lineCount() {
    return 4;
  }
}

let square = new Squre();
console.log(square.lineCount);
