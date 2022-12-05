const { UTIL, ASk_MESSAGE } = require("../Constant");
const { Console } = require(UTIL);

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },

  readBaseballNumbers(callback) {
    this.readLine(ASk_MESSAGE.INPUT_NUMBER, callback);
  },

  readBaseballEnding(callback) {
    this.readLine(ASk_MESSAGE.INPUT_COMMAND, callback);
  },
};

module.exports = InputView;
