import formatDateForDb from "./commons";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function saveTrip(title, description, startDate, endDate) {
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
