const { UTIL } = require("../Constant");
const { Console } = require(UTIL);

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },

  readBaseballNumbers(callback) {
    this.readLine("숫자를 입력해주세요", callback);
  },
};

module.exports = InputView;
