const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];

function countLanguages(list) {
  const languageCount = list.map((dev) => {
    let c = 0;
    let javaScript = 0;
    let ruby = 0;
    if (dev.language === 'C') {
      c++;
    }
    if (dev.language === 'JavaScript') {
      javaScript++;
    }
    if (dev.language === 'Ruby') {
      ruby++;
    }

    return {
      C: c,
      JavaScript: javaScript,
      Ruby: ruby,
    };
  });

  const countC = Object.values(languageCount)
    .map((el) => el.C)
    .reduce((accum, curr) => accum + curr, 0);
  const countJavaScript = Object.values(languageCount)
    .map((el) => el.JavaScript)
    .reduce((accum, curr) => accum + curr, 0);
  const countRuby = Object.values(languageCount)
    .map((el) => el.Ruby)
    .reduce((accum, curr) => accum + curr, 0);

  return {
    C: countC,
    JavaScript: countJavaScript,
    Ruby: countRuby,
  };
}

countLanguages(list1); //?
