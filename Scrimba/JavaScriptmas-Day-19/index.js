function alphabetSubsequence(str) {
  if (typeof str !== 'string') return false;

  const hasDuplicates = new Set(str).size;

  if (str.length > hasDuplicates) return false;

  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) >= str.charAt(i + 1)) {
      return false;
    }
  }

  return true;
}

module.exports = alphabetSubsequence;
