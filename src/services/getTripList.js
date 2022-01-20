const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getTripList() {
  const response = await fetch(baseUrl + "tripList/");
  if (response.ok) return response.json();
  throw response;
}
