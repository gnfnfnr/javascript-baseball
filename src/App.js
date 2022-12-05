const GameController = require("./controller/GameController");
const OutputView = require("./view/OutputView");

class App {
  play() {
    OutputView.printStart();
    new GameController();
  }
}

module.exports = App;
