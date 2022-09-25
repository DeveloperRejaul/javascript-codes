// in js ther are no abstrect class

class Shape {
  constructor() {
    this.color = 'unknown';
    if (this.constructor === Shape) {
      throw new Error('Cant inharite abstract class ');
    }
  }

  fill(color) {
    throw new Error('Abstract Mathod');
  }

  draw() {
    console.log(`draw  "${this.color}" shape `);
  }
}

class Squre extends Shape {
  fill(color) {
    this.color = color;
  }
}

let square = new Squre();
square.fill('red');
square.draw();
