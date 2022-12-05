const AnswerMaker = {
  /**
   * @param {number} size 정답 개수
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 서로 3개의 숫자의 배열을 반환해준다.
   */

  makeAnswer(size, generateRandomNumber) {
    const AnswerNumbers = new Set();
    while (AnswerNumbers.size < size) {
      AnswerNumbers.add(generateRandomNumber());
    }
    return Array.from(AnswerNumbers);
  },
};

module.exports = AnswerMaker;
