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
  getBinek(routeAddress) {
    if (routeAddress == "?") return apiClient.get("/binek");
    else return apiClient.get("/binek/search" + routeAddress);
  },
  getIsMakinesi(routeAddress) {
    if (routeAddress == "?") return apiClient.get("/ismakinesi");
    else return apiClient.get("/ismakinesi/search" + routeAddress);
  },
  getOtobus(routeAddress) {
    if (routeAddress == "?") return apiClient.get("/otobus");
    else return apiClient.get("/otobus/search" + routeAddress);
  },
  getKamyon(routeAddress) {
    if (routeAddress == "?") return apiClient.get("/kamyon");
    else return apiClient.get("/kamyon/search" + routeAddress);
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
