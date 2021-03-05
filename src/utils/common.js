export function toUpperFirstChar(str) {
  if (!str || str.length === 0) {
    return "";
  }

  return str[0].toUpperCase()
  + str.slice(1, str.length);
}

export function getRandomHSLColor(saturation, lightness, HoverLightness) {
  const randomHue = Math.floor(Math.random() * 360);
  const nomal = `hsl(${randomHue}, ${saturation}, ${lightness})`;
  const hover = `hsl(${randomHue}, ${saturation}, ${HoverLightness})`;

  return { nomal, hover };
}

export function concatOnNotExistElement(array, newValues) {
  const concated = array.concat(newValues);
  const set = new Set(concated);

  return Array.from(set);
}
