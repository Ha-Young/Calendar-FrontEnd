export function toUpperFirstChar(str) {
  if (!str || str.length === 0) {
    return "";
  }

  return str[0].toUpperCase()
  + str.slice(1, str.length);
}
