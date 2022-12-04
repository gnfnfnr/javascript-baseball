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

  #countBalls(userInputNum) {
    return this.#randomAnswer.reduce((ballCounts, number, numberIndex) => {
      return ![-1, numberIndex].includes(userInputNum.indexOf(number))
        ? ballCounts + 1
        : ballCounts;
    }, 0);
  }

  #countStrikes(userInputNum) {
    return this.#randomAnswer.reduce((strikeCounts, number, numberIndex) => {
      return userInputNum.indexOf(number) === numberIndex
        ? strikeCounts + 1
        : strikeCounts;
    }, 0);
  }
}

module.exports = BaseballGame;
