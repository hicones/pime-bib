import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_SECRET,
  },
});

export default api;
