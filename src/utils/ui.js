export const generateCardHeight = (start, end) => {
  return (end.slice(0, 2) - start.slice(0, 2)) * 51;
};

export const generateCardLocation = (top) => {
  return top.slice(0, 2) * 51;
};

export const extractUrl = (url) => {
  const [ date, path ] = url.split("=");

  return { date, path };
};