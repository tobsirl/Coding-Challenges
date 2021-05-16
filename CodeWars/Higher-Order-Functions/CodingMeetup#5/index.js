// function countLanguages(list) {
//   const languageCount = list.map((dev) => {
//     let c = 0;
//     let javaScript = 0;
//     let ruby = 0;
//     if (dev.language === 'C') {
//       c++;
//     }
//     if (dev.language === 'JavaScript') {
//       javaScript++;
//     }
//     if (dev.language === 'Ruby') {
//       ruby++;
//     }

//     return {
//       C: c,
//       JavaScript: javaScript,
//       Ruby: ruby,
//     };
//   });

//   const countC = Object.values(languageCount)
//     .map((el) => el.C)
//     .reduce((accum, curr) => accum + curr, 0);
//   const countJavaScript = Object.values(languageCount)
//     .map((el) => el.JavaScript)
//     .reduce((accum, curr) => accum + curr, 0);
//   const countRuby = Object.values(languageCount)
//     .map((el) => el.Ruby)
//     .reduce((accum, curr) => accum + curr, 0);

//   return {
//     C: countC,
//     JavaScript: countJavaScript,
//     Ruby: countRuby,
//   };
// }

module.exports = function countLanguages(list) {
  return list
    .map((el) => el['language'])
    .reduce((accum, curr) => (accum[curr] = accum[curr] + 1 || 1), {});
};
