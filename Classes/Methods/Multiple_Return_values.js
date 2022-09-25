class ArrayAssistent {
  constructor(data) {
    this.data = data;
  }

  getFirstLast() {
    let first = -1;
    let last = -1;
    let len = this.data.length;
    if (len > 0) {
      first = this.data[0];
      last = this.data[len - 1];
    }
    return {first: first, last: last};
  }
}

let ar = [2, 3, 5];
let assistent = new ArrayAssistent(ar);
let result = assistent.getFirstLast();
result;
