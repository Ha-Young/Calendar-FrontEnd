export default function getDisplayingTime(value, idx) {
  let time = value;
  time = time + idx + 1;

  if (time < 10) {
    time = `0${time} : 00`;
  } else {
    time = `${time} : 00`;
  }

  return time;
}
