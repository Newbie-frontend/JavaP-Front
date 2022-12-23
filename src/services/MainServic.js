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
  deleteBinek(id) {
    return apiClient.delete("/binek/" + id);
  },
  deleteKamyon(id) {
    return apiClient.delete("/kamyon/" + id);
  },
  deleteIsMakinesi(id) {
    return apiClient.delete("/ismakinesi/" + id);
  },
  deleteOtobus(id) {
    return apiClient.delete("/otobus/" + id);
  },
  postBinek(araba) {
    return apiClient.post("/binek", araba);
  },
  postIsMakinesi(araba) {
    return apiClient.post("/ismakinesi", araba);
  },
  postOtobus(araba) {
    return apiClient.post("/otobus", araba);
  },
  postKamyon(araba) {
    return apiClient.post("/kamyon", araba);
  },
  getAraba(id) {
    return apiClient.get("/araba/" + id);
  },
};
