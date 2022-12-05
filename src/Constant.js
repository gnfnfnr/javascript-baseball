const UTIL = "@woowacourse/mission-utils";

const ANSWER = {
  SIZE: 3,
};

const ASk_MESSAGE = {
  INPUT_NUMBER: "숫자를 입력해주세요",
};

const QUESTION = {
  CHECK_VALIDATION: {
    VALIDATORNAME: [
      "isNumber",
      "isPositiveInteger",
      "isNumberSize",
      "isDifferentNumbers",
      "isNotInclude",
    ],
    VALIDATIONINFOMATION: {
      checkSize: 3,
      checkIncludes: ["0"],
    },
  },
};

const ERROR_MESSAGE = {
  ISNUMBER: "숫자가 아닙니다.",
  ISPOSTIVEINTEGER: "양의 정수여야 합니다.",
  ISNUMBERSIZE: "3자리의 숫자여야 합니다.",
  ISDIFFERENTNUMBERS(checkSize) {
    return `서로 다른 ${checkSize}자리 수여야 합니다.`;
  },
  ISNOTINCLUDE(checkList) {
    return `${checkList.join(", ")}가 포함되서는 안됩니다.'`;
  },
  ISVALUECORRECT(checkList) {
    return `${checkList.join(", ")} 중 하나로 입력해주세요.'`;
  },
};

const Hint_Message = {
  NOTHING: "낫싱",
  BALL(ballCount) {
    return `${ballCount}볼`;
  },
  STRIKE(strikeCount) {
    return `${strikeCount}스트라이크`;
  },
  BALLANDSTRIKE(ballCount, strikeCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  },
};

module.exports = {
  UTIL,
  ANSWER,
  QUESTION,
  ERROR_MESSAGE,
  ASk_MESSAGE,
  Hint_Message,
};
