const {
  UTIL,
  HINT_MESSAGE,
  CELEBRATION_MESSAGE,
  START_MESSAGE,
} = require("../Constant");
const { Console } = require(UTIL);

/**
 * 결과, 진행 사항을 출력하는 역할을 한다.
 */

const OutputView = {
  printStart() {
    Console.print(START_MESSAGE);
  },
  printHint(ball, strike) {
    if (!strike && !ball) Console.print(HINT_MESSAGE.NOTHING);
    if (!strike && ball) Console.print(HINT_MESSAGE.BALL(ball));
    if (!ball && strike) Console.print(HINT_MESSAGE.STRIKE(strike));
    if (ball && strike) Console.print(HINT_MESSAGE.BALLANDSTRIKE(ball, strike));
  },

  printCelebration() {
    Console.print(CELEBRATION_MESSAGE);
  },
};

module.exports = OutputView;
