import axios from "axios";

export const API = axios.create({
  baseURL: "https://kriptostore-production.up.railway.app/api/v1/",
});

export function setAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}
