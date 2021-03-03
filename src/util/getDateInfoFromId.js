export default function getDateInfoFromId(id) {
  const year = id.slice(0, 4);
  const month = id.slice(5, 7);
  const day = id.slice(8, 10);

  return {
    year, month, day
  };
}