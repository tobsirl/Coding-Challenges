function adjacentElementProduct(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * nums[i + 1] >= max) {
      max = nums[i] * nums[i + 1];
    }
  }
  return max;
}

module.exports = adjacentElementProduct;
