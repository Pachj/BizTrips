const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getCertainTrip(id) {
  const response = await fetch(baseUrl + "trips/" + id);
  if (response.ok) return response.json();
  throw response;
}
