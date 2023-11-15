import axios from "axios";

export const API = axios.create({
  baseURL: "kriptostore-production.up.railway.app",
});

export function setAuthToken(token: string) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}
