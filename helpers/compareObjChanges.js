export default (obj1, obj2) => {
  let changes = {};

  for (let propName in obj1) {
    if (obj1[propName] !== obj2[propName]) {
      changes[propName] = obj1[propName];
    }
  }

  if (!Object.keys(changes).length) return false;

  return changes;
};
