class Clac {
  constructor() {
    this.lastSum = null;
  }
  getSum(n1, n2) {
    this.lastSum = n1 + n2;
    return this.lastSum;
  }
}

let calc = new Clac();

let sum1 = calc.getSum(5, 3);
sum1;

let sum2 = calc.getSum(2, 3);
sum2;

let lastsum = calc.lastSum;
lastsum;
