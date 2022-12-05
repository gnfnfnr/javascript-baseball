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
    const { ball, strike } = this.#baseballGame.showResult(userNumbers);
    OutputView.printHint({ ball, strike });
    return strike === 3 ? "" : this.inputUserNumber();
  }
}

module.exports = GameController;
