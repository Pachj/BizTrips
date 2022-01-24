export default function formatDateForDb(date) {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));

  return [year, month, day, 0, 0];
}
