export function getHilightStyle(diffForCurrentDate) {
  return diffForCurrentDate === 0 ? 'hilight' : 'nomal';
}

export function getBorderStyle(diffForCurrentDate) {
  let style;

  if (diffForCurrentDate < 0) {
    style = "rightBorder";
  } else if (diffForCurrentDate > 0) {
    style = "leftBorder";
  }

  return style;
}
