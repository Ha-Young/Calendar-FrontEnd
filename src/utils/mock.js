import moment from "moment";

export const mockEvent = [
  {
    id: "adlksjfal",
    title: "read book",
    description: "read book so long long time",
    date: moment(11).format("YYYY-MM-DD"),
    startTime: 10,
    endTime: 19,
  },
  {
    id: "aewq32561",
    title: "coding",
    description: "do or die",
    date: moment().day(99).format("YYYY-MM-DD"),
    startTime: 2,
    endTime: 5,
  },
  {
    id: "kjk31kn",
    title: "play boardgame",
    description: "win or die",
    date: moment().day(8).format("YYYY-MM-DD"),
    startTime: 5,
    endTime: 9,
  },
];
