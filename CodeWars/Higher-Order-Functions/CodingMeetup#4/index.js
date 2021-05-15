module.exports = function getFirstPython(list) {
  const dev = list.find((el) => el.language === 'Python');
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : `There will be no Python developers`;
};
