function arrayMaximalAdjacentDifference(nums) {
  let maxDiff = Math.abs(nums[0] - nums[1]);

  for (let i = 1; i <= nums.length; i++) {
    const diff = Math.abs(nums[i] - nums[i + 1]);

    if (maxDiff < diff) {
      maxDiff = diff;
    }
    return maxDiff;
  }
}

module.exports = arrayMaximalAdjacentDifference;
