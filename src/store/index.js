import Vue from "vue";
import Vuex from "vuex";
import MainService from "@/services/MainServic";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    araba: null,
    serverResponse: null,
  },
  getters: {},
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    SET_SERVERRESPONSE(state, serverResponse) {
      state.serverResponse = serverResponse;
    },
  },
  actions: {
    getCars({ commit }, { arabaTipi, araba }) {
      let routeAddress = "?";
      //create route address
      if (araba.marka) {
        routeAddress = routeAddress + "marka=" + araba.marka;
      }
      if (araba.model) {
        routeAddress = routeAddress != "?" ? routeAddress + "&" : routeAddress;
        routeAddress = routeAddress + "model=" + araba.model;
      }
      if (araba.fiyat) {
        routeAddress = routeAddress != "?" ? routeAddress + "&" : routeAddress;
        routeAddress = routeAddress + "fiyat=" + araba.fiyat;
      }
      if (araba.renk) {
        routeAddress = routeAddress != "?" ? routeAddress + "&" : routeAddress;
        routeAddress = routeAddress + "renk=" + araba.renk;
      }
      if (araba.yakitTipi) {
        routeAddress = routeAddress != "?" ? routeAddress + "&" : routeAddress;
        routeAddress = routeAddress + "yakit=" + araba.yakitTipi;
      }
      if (araba.adres) {
        routeAddress = routeAddress != "?" ? routeAddress + "&" : routeAddress;
        routeAddress = routeAddress + "sehir=" + araba.adres;
      }

      //request from service
      if (arabaTipi == "binek") {
        if (araba.tip) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "tip=" + araba.tip;
        }
        if (araba.vites) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "vites=" + araba.vites;
        }
        return MainService.getBinek(routeAddress)
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      } else if (arabaTipi == "isMakinesi") {
        if (araba.agirlik) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "agirlik=" + araba.agirlik;
        }
        if (araba.tip) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "tip=" + araba.tip;
        }
        return MainService.getIsMakinesi(routeAddress)
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      } else if (arabaTipi == "otobus") {
        if (araba.uzunluk) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "uzunluk=" + araba.uzunluk;
        }
        if (araba.koltukSayisi) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "koltukSayisi=" + araba.koltukSayisi;
        }
        return MainService.getOtobus(routeAddress)
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      } else if (arabaTipi == "kamyon") {
        if (araba.uzunluk) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress = routeAddress + "uzunluk=" + araba.uzunluk;
        }
        if (araba.tasiyabilecekYuk) {
          routeAddress =
            routeAddress != "?" ? routeAddress + "&" : routeAddress;
          routeAddress =
            routeAddress + "tasiyabilecekYuk=" + araba.tasiyabilecekYuk;
        }
        return MainService.getKamyon(routeAddress)
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      }
    },
    arabaSil({ state }, { id }) {
      console.log(state.serverResponse);
      MainService.deleteIsMakinesi(id);
    },
    sendCar({ commit }, { arabaTipi, araba }) {
      if (arabaTipi == "binek") {
        MainService.postBinek(araba);
      } else if (arabaTipi == "isMakinesi") {
        MainService.postIsMakinesi(araba);
      } else if (arabaTipi == "otobus") {
        MainService.postOtobus(araba);
      } else if (arabaTipi == "kamyon") {
        MainService.postKamyon(araba);
      } else {
        commit("SET_SERVERRESPONSE", false);
      }
    },
  },
  modules: {},
});
