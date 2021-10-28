function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log(`My name is ${name}`);
    },
  };
}

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

const suspectList = [];

suspects.map((name) => suspectList.push(CreateSuspectObjects(name)));

suspectList; //?

const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (const key in list) {
      if (Object.hasOwnProperty.call(list, key)) {
        const element = list[key];
      }
    }
  }
};

_.each(['sally', 'georgie', 'porgie'], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, 'is younger than ', list[i + 1]);
  } else {
    console.log(name, 'is the oldest');
  }
});
