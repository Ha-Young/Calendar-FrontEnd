export function currentMonthName() {
  return value.format("MMMM");
}

export function currentYear() {
  return value.format("YYYY");
}

export function previousDay() {
  return value.clone().subtract(1, "day");
}

export function nextDay() {
  return value.clone().add(1, "day");
}
