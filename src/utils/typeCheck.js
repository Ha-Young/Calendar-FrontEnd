export function isObject(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return true;
    }
    return false;
  }
  return false;
}  
