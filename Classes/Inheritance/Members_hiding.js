class Shape {
  fill() {
    console.log('Fill Implementation');
  }
}

class Square extends Shape {
  fill() {
    console.log('New fill impelemantation ');
  }
}

let square = new Square();
square.fill();
