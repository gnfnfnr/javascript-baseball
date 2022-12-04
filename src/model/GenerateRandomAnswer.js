const { UTIL } = require("../Constant");
const { Random } = require(UTIL);

const GenerateRandomAnswer = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 9,
  generate() {
    return Random.pickNumberInRange(
      GenerateRandomAnswer.RANDOM_LOWER_INCLUSIVE,
      GenerateRandomAnswer.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = GenerateRandomAnswer;
