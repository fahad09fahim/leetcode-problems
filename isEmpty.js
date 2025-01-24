let isEmpty = function (obj) {
  if (Array.isArray(obj) || typeof obj === "string") {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};
const results = isEmpty((obj = [1, 2]));
const results1 = isEmpty((obj = { x: 5, y: 42 }));
const results3 = isEmpty((obj = { length: 0 }));
console.log(results); // true
console.log(results1);
console.log(results3);
// true
