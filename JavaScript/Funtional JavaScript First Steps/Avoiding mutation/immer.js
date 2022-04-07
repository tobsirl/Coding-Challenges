const immer = require('immer');

immer.produce;

const regularJSArray = [1, 2, 3];

const newArray = immer.produce(regularJSArray, (draft) => {
  draft.push(4);
});

regularJSArray.length; 

newerArray = immer.produce(newArray, (draft) => {
  draft[0] = 5;
}); 
