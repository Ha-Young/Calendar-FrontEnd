const colors = [
  "rgb(255, 209, 125, 0.6)",
  "rgb(61, 168, 255, 0.6)",
  "rgb(255, 25, 98, 0.6)",
  "rgb(250, 255, 102, 0.6)",
  "rgb(255, 171, 69, 0.6)",
  "rgb(213, 61, 255, 0.6)",
  "rgb(61, 84, 255, 0.6)",
];
const randomColorPicker = () => {
  const min = Math.ceil(0);
  const max = Math.floor(colors.length);
  const randomNumber =  Math.floor(Math.random() * (max - min)) + min;

  return colors[randomNumber];
};

export default randomColorPicker;
