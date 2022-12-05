const UTIL = "@woowacourse/mission-utils";

const ENDING_COMMAND = {
  RESTART: "1",
  END: "2",
  CHECK_VALIDATION: {
    VALIDATORNAME: ["isValueCorrect"],
    VALIDATIONINFOMATION: {
      checkList: ["1", "2"],
    },
  },
};

const ASk_MESSAGE = {
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  INPUT_COMMAND: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const RANDOM_ANSWER = {
  SIZE: 3,
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

const HINT_MESSAGE = {
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

const CELEBRATION_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";

module.exports = {
  UTIL,
  RANDOM_ANSWER,
  ERROR_MESSAGE,
  ASk_MESSAGE,
  HINT_MESSAGE,
  CELEBRATION_MESSAGE,
  ENDING_COMMAND,
  START_MESSAGE,
};
