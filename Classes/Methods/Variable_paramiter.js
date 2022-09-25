class Log {
  constructor() {
    this.lastData = '';
  }

  print5(data) {
    this.lastData = data;

    if (data.length > 5) {
      data = data.substring(0, 5);
    }
    console.log(data);
  }
}

let log = new Log();
log.print5('2 3 4 5 6');

console.log(log.lastData);
