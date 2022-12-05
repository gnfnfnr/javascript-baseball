const { RANDOM_ANSWER, ENDING_COMMAND } = require("../Constant");
const BaseballGame = require("../model/BaseballGame");
const Validation = require("../model/Validation");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const { UTIL } = require("../Constant");
const { Console } = require(UTIL);

class GameController {
  #baseballGame = new BaseballGame();

  constructor() {
    this.#inputUserNumber();
  }

  #inputUserNumber() {
    InputView.readBaseballNumbers((userNmbers) => {
      new Validation(RANDOM_ANSWER.CHECK_VALIDATION, userNmbers).showResult();
      this.#printUserHint(userNmbers);
    });
  }

  #printUserHint(userNumbers) {
    const { ball, strike } = this.#baseballGame.showResult(userNumbers);
    OutputView.printHint(ball, strike);
    return strike === 3
      ? this.#printUserCelebration()
      : this.#inputUserNumber();
  }

  #printUserCelebration() {
    OutputView.printCelebration();
    this.#inputUserEndingCommand();
  }

  #inputUserEndingCommand() {
    InputView.readBaseballEnding((userCommand) => {
      new Validation(ENDING_COMMAND.CHECK_VALIDATION, userCommand).showResult();
      this.#endGame(userCommand);
    });
  }

  #endGame(userCommand) {
    if (userCommand === ENDING_COMMAND.RESTART) new GameController();
    if (userCommand === ENDING_COMMAND.END) Console.close();
  }
}

module.exports = GameController;
