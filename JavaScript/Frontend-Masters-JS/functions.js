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
