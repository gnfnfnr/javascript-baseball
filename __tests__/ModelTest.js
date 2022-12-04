const { QUESTION } = require("../src/Constant");
const BaseballGame = require("../src/model/BaseballGame");
const Validation = require("../src/model/Validation");
const MissionUtils = require("@woowacourse/mission-utils");

describe("유효성 검사하기", () => {
  test("야구게임 값", () => {
    const input = ["1e3", "123.0", "+00", "1234", "120", "-12", "344"];
    input.forEach((value) => {
      expect(() => {
        new Validation(QUESTION.CHECK_VALIDATION, value).showResult();
      }).toThrow();
    });
  });
});

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("스트라이크 볼 검사하기", () => {
  test("야구게임 값", () => {
    mockRandoms([5, 7, 8]);
    const question = ["961", "345", "527", "756", "875", "857", "572", "578"];
    const answer = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 2, strike: 0 },
      { ball: 2, strike: 1 },
      { ball: 3, strike: 0 },
      { ball: 0, strike: 2 },
      { ball: 0, strike: 3 },
    ];
    const baseball = new BaseballGame();
    question.forEach((numbers, index) => {
      const result = baseball.showResult(numbers);
      expect(result).toEqual(answer[index]);
    });
  });
});
