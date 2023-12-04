export async function fetchEstablishments(
  url = "",
  api_secret = "",
  data = {}
) {
  const response = await fetch(`${url}/listestablishmentbytype`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": api_secret,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
