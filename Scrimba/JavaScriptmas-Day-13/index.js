function extractEachKth(nums, index) {
  return nums.filter((number) => number % index !== 0);
}

module.exports = extractEachKth;
