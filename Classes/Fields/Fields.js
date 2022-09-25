class Game {
  constructor() {
    // Public Field
    this.name = 'rejaul';
    this.year = 2000;
  }

  //   Private field
  #devloper = 'rejaul2';
  showDeveloper() {
    console.log(this.#devloper);
  }
}

let game = new Game();

game;
