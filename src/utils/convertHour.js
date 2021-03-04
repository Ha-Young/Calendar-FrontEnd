export const convertHour = (string) => {
  const temp = [...string];
  const hour = temp[0] === "0" ? string.slice(1, 2) : string.slice(0, 2);
  
  return hour;
};
