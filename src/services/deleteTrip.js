const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function deleteTrip(id) {
    return fetch(baseUrl + 'trips/' + id, {
      method: "DELETE",
    });
}
