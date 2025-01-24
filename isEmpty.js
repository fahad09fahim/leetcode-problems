let isEmpty = function (obj) {
  if (obj.length === 0) return true;
  return Object.keys(obj).length === 0;
};
const results = isEmpty((obj = [1, 2]));
const results1 = isEmpty((obj = { x: 5, y: 42 }));
const results3 = isEmpty((obj = {}));
console.log(results); // true
console.log(results1);
console.log(results3);
// true
