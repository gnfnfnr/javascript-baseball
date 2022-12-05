const { UTIL, ASk_MESSAGE, Hint_Message } = require("../Constant");
const { Console } = require(UTIL);

/**
 * 결과, 진행 사항을 출력하는 역할을 한다.
 */

const OutputView = {
  printHint({ ball, strike }) {
    if (!strike && !ball) Console.print(Hint_Message.NOTHING);
    if (!strike && ball) Console.print(Hint_Message.BALL(ball));
    if (!ball && strike) Console.print(Hint_Message.BALLANDSTRIKE(strike));
    if (ball && strike) Console.print(Hint_Message.BALLANDSTRIKE(ball, strike));
  },
};

module.exports = OutputView;
