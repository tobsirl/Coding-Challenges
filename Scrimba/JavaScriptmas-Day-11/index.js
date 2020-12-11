function avoidObstacles(nums) {
  const sortNums = nums.sort();

  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums.every((el) => el % i > 0)) {
      return i;
    }
  }
}

module.exports = avoidObstacles;
