function extractMatrixColumn(matrix, column) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][column]);
      break;
    }
  }
  return result;
}

module.exports = extractMatrixColumn;
