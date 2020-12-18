function arrayPreviousLess(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i - 1] < nums[i] ? result.push(nums[i - 1]) : result.push(-1);
  }
  return result;
}

module.exports = arrayPreviousLess;
