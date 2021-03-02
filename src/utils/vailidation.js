export const validateText = (text) => {
  if (typeof text !== "string" || text.length === 0) {
    return false;
  }

  return true;
};

export const validateTime = (start, end) => {
  console.log(start, end);
  if (start >= end) return false;
  
  return true;
};
