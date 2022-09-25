class Car {
  getAvg(...values) {
    if (values.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i in values) {
      if (values.hasOwnProperty(i)) {
        sum += values[i];
      }
    }
    return sum;
  }
}

let car = new Car();
let avg = car.getAvg(1, 2, 3);
