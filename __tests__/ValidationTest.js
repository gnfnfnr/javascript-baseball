const { QUESTION } = require("../src/Constant");
const Validation = require("../src/model/Validation");

describe("유효성 검사하기", () => {
  // mockReturnValue의 초기 값이 undefined이라는 것을 확인할 수 있다
  test("야구게임 값", () => {
    const input = ["1e3", "123.0", "+00", "1234", "120", "-12", "344"];
    input.forEach((value) => {
      expect(() => {
        new Validation(QUESTION.CHECK_VALIDATION, value).showResult();
      }).toThrow();
    });
  });
});
