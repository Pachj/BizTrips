const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function updateTrip(id, tripTitle, tripDescription, startDate, endDate) {
  return fetch(baseUrl + 'trips/' + id, {
    method: "PUT",
      headers: {
      "Content-Type": "application/json",
    },
    body:
      JSON.stringify({
        "title": tripTitle,
        "description": tripDescription,
        "startTrip": startDate,
        "endTrip": endDate
      })
  });
}
