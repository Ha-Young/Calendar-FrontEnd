export default function makeNestedObject(value, targetObj, ...keys) {
  const currentKey = keys[0]
  
  if (typeof currentKey !== "string") {
    throw new Error("key is not string");
  }
  
  const isValidAccess = 
    ((typeof targetObj[currentKey]) === "undefined") 
    || ((typeof targetObj[currentKey]) === "object");

  if (!isValidAccess) {
    throw new Error("Access to existed key!");
  }

  if (targetObj[currentKey] === undefined) {
    targetObj[currentKey] = {};
  }

  keys.shift();

  if (!keys.length) {
    if (value === null) {
      delete targetObj[currentKey];
      return;
    }

    targetObj[currentKey] = value;
    return;
  }

  makeNestedObject(value, targetObj[currentKey], ...keys);
  if (!Object.keys(targetObj[currentKey]).length && value === null) {
    delete targetObj[currentKey];
  }
}
