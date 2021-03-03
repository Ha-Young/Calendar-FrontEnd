export default function makeTreeBranch(value, targetObj, ...keys) {
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
    targetObj[currentKey] = value;
    return;
  }

  makeTreeBranch(value, targetObj[currentKey], ...keys);
}