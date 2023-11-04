import axios from "axios";

const api = axios.create({
  baseURL: "https://api.bomibarato.com/api/rest",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_API_SECRET,
  },
});

export default api;
