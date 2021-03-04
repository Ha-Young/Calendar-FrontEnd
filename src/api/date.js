import { add, format } from "date-fns";

export const getToday = function () {
  return new Date();
}

export const getFormat = function(date) {
  return format(date, "yyyy-MM-dd");
}

export const addDate = function (currentDate, duration) {
  return add(currentDate, duration);
}

export const parseDate = function (dateString) {
  const dateArray = dateString.split("-");
  
  const dateObject = {
    year: parseInt(dateArray[0]),
    month: parseInt(dateArray[1]),
    date: parseInt(dateArray[2]),
  }
  
  return dateObject;
}

export const convertToReduxStateForm = function (data) {
 for (let i = 0; i < data.length; i++) {
   const hour = data[Object.keys(data)[0]];

   const eventId = data[hour];
   const event = eventId
 }

}
