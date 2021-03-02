const convertTime = time => {
  if (time < 12) {
    return time + " AM";
  }

  if (time === 12) {
    return time + " PM";
  }

  if (time > 12) {
    return (time - 12) + " PM";
  }
}

export default convertTime;
