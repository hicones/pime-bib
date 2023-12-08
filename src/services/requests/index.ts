import { EstablishmentProps } from "@/types";

interface EstablishmentResponse {
  establishment_by_pk: EstablishmentProps;
}

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

export async function getEstablishment(url = "", api_secret = "", id = "") {
  const response = await fetch(`${url}/getestablishmentbyid?id=${id}`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": api_secret,
    },
  });
  return response.json();
}

export async function getEstablishmentBySearch(
  url = "",
  api_secret = "",
  filter = ""
) {
  const response = await fetch(
    `${url}/getestablishmentbyfilter?filter=${filter}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": api_secret,
      },
    }
  );
  return response.json();
}
