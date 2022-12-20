import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:8080`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getBinek() {
    return apiClient.get("/binek");
  },
  getIsMakinesi() {
    return apiClient.get("/ismakinesi");
  },
  getOtobus() {
    return apiClient.get("/otobus");
  },
  getKamyon() {
    return apiClient.get("/kamyon");
  },
  getCars() {
    return apiClient.get("/cars");
  },
  getCar(id) {
    return apiClient.get("/cars/" + id);
  },
  postCar(car) {
    return apiClient.post("/cars", car);
  },
};
