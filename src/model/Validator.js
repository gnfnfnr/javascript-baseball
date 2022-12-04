const { ERROR_MESSAGE } = require("../Constant");

const Validatior = {
  isNumber(value) {
    const check = value
      .split("")
      .filter((letter) => !Number.isInteger(Number(letter)));
    return check.length === 0 ? true : ERROR_MESSAGE.ISNUMBER;
  },

  isPositiveInteger(value) {
    return Number(value) > 0 ? true : ERROR_MESSAGE.ISPOSTIVEINTEGER;
  },

  isNumberSize(value, checkInfo) {
    const { checkSize } = checkInfo;
    return value.length === checkSize ? true : ERROR_MESSAGE.ISNUMBERSIZE;
  },

  isDifferentNumbers(value, checkInfo) {
    const { checkSize } = checkInfo;
    return new Set(value).size === checkSize
      ? true
      : ERROR_MESSAGE.ISDIFFERENTNUMBERS(checkSize);
  },

  isNotInclude(value, checkInfo) {
    const { checkIncludes } = checkInfo;
    const check = checkIncludes.filter((element) => value.includes(element));
    return check.length === 0
      ? true
      : ERROR_MESSAGE.ISNOTINCLUDE(checkIncludes);
  },

  isValueCorrect(value, checkInfo) {
    const { checkList } = checkInfo;
    return checkList.includes(value)
      ? true
      : ERROR_MESSAGE.ISVALUECORRECT(checkList);
  },
};

module.exports = Validatior;
