function insertDashes(arr) {
  return arr.split('').join('-').replace(/- -/g, " ")
}

module.exports = insertDashes