export function generateRandomColor() {
  return `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
}

export function generateEntryBoxHeight(start, end) {
  return (end - start) * 42;
}

export function generateEntryBoxLocation(start) {
  return start * 42;
}
