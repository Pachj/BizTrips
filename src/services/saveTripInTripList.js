import {getTripList} from "./getTripList";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function saveTripInTripList(tripId) {

  getTripList().then((trips) => {
    trips = [...trips.trips, tripId]

    return fetch(baseUrl + 'tripList/', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:
      JSON.stringify({"trips": trips})
    });
  });
}
