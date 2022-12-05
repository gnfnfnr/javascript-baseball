const { QUESTION } = require("../Constant");
const BaseballGame = require("../model/BaseballGame");
const Validation = require("../model/Validation");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class GameController {
  #baseballGame = new BaseballGame();

  inputUserNumber() {
    InputView.readBaseballNumbers((userNmbers) => {
      new Validation(QUESTION.CHECK_VALIDATION, userNmbers).showResult();
      this.printUserHint(userNmbers);
    });
  }

  printUserHint(userNumbers) {
    const count = this.#baseballGame.showResult(userNumbers);
    OutputView.printHint(count);
    // return strike === 3 ? this.gameEnd() : this.userInputProcess();
  }
}

module.exports = GameController;
