class Game {
  constructor(name) {
    this.name = name;
    this._listeners = [];
  }

  addListeners(listener) {
    this._listeners.push(listener);
  }

  start() {
    for (var listener of this._listeners) {
      listener.gameStared(this.name);
    }
  }
}

class Statistic {
  constructor() {
    this.startCount = 0;
    this.lastGame = '';
  }
  gameStared(name) {
    this.startCount++;
    this.lastGame = name;
  }
}

let statistic = new Statistic();
let heroes = new Game('Heroes');
let doom = new Game('Doom');

// Subscribe to eveents
heroes.addListeners(statistic);
doom.addListeners(statistic);

doom.start();
heroes.start();

console.log(statistic.lastGame);
console.log(statistic.startCount);
