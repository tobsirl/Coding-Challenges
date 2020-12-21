function sumOfTwo(nums1, nums2, value) {
  let restObj = {};
  nums1.forEach((el) => {
    let rest = value - el;
    restObj[rest] = rest;
  });

  for (let number of nums2) {
    if (restObj.hasOwnProperty(number)) {
      return true;
    }
  }
  
  return false;
}

module.exports = sumOfTwo;
