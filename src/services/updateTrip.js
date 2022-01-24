import formatDateForDb from "./commons";
import {format, isValid} from "date-fns";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function updateTrip(id, tripTitle, tripDescription, startDate, endDate) {
  if (isValid(startDate)) {
    console.log('start');
    console.log(startDate);
    startDate = format(startDate, 'yyyy-MM-dd');
  }
  if (isValid(endDate)) {
    console.log('end');
    console.log(endDate);
    endDate = format(endDate, 'yyyy-MM-dd');
  }

  return fetch(baseUrl + 'trips/' + id, {
    method: "PUT",
      headers: {
      "Content-Type": "application/json",
    },
    body:
      JSON.stringify({
        "title": tripTitle,
        "description": tripDescription,
        "startTrip": formatDateForDb(startDate),
        "endTrip": formatDateForDb(endDate)
      })
  });
}
