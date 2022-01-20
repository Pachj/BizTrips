const baseUrl = process.env.REACT_APP_API_BASE_URL;

const formatDateForDb = (date) => {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));

  return [year, month, day, 0, 0];
}

export async function saveTrip(title, description, startDate, endDate) {
  console.log(baseUrl);

  return fetch(baseUrl + "trips/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:
      JSON.stringify({
        "title": title,
        "description": description,
        "startTrip": formatDateForDb(startDate),
        "endTrip": formatDateForDb(endDate)
      })
  });
}
