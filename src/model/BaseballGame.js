const { ANSWER } = require("../Constant");
const AnswerMaker = require("./AnswerMaker");
const { generate } = require("./GenerateRandomAnswer");

class BaseballGame {
  #randomAnswer;

  constructor() {
    this.#makeRandomAnswer();
  }

  #makeRandomAnswer() {
    this.#randomAnswer = AnswerMaker.makeAnswer(ANSWER.SIZE, generate);
  }

  #countBalls(numbers) {
    return this.#randomAnswer.reduce((ballCounts, number, numberIndex) => {
      return ![-1, numberIndex].includes(numbers.indexOf(number))
        ? ballCounts + 1
        : ballCounts;
    }, 0);
  }

  #countStrikes(numbers) {
    return this.#randomAnswer.reduce((strikeCounts, number, numberIndex) => {
      return numbers.indexOf(number) === numberIndex
        ? strikeCounts + 1
        : strikeCounts;
    }, 0);
  }

  showResult(numbers) {
    return {
      ball: this.#countBalls(numbers),
      strike: this.#countStrikes(numbers),
    };
  }
}

module.exports = BaseballGame;
