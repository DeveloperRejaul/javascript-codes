class Counter {
  constructor() {
    this.count = null;
  }
  incby(value) {
    this.count += value;
  }
  incbyAmount(value, amount) {
    this.count += value * amount;
  }
}
let counter = new Counter();

counter.incby(2);
console.log(counter.count);

counter.incbyAmount(3, 5);
console.log(counter.count);
