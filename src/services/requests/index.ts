import { EstablishmentProps } from "@/types";

interface EstablishmentResponse {
  establishment_by_pk: EstablishmentProps;
}

export async function fetchEstablishments(data = {}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/listestablishmentbytype`,
    {
      method: "POST",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_SECRET
          ? process.env.NEXT_PUBLIC_API_SECRET
          : "",
      },
      body: JSON.stringify(data),
    }
  );
  return response.json();
}

export async function getEstablishment(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getestablishmentbyid?id=${id}`,
    {
      method: "GET",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_SECRET
          ? process.env.NEXT_PUBLIC_API_SECRET
          : "",
      },
    }
  );
  return response.json();
}

export async function getEstablishmentBySearch(filter: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/getestablishmentbyfilter?filter=${filter}`,
    {
      method: "GET",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_SECRET
          ? process.env.NEXT_PUBLIC_API_SECRET
          : "",
      },
    }
  );
  return response.json();
}
