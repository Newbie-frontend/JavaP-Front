import Vue from "vue";
import Vuex from "vuex";
import MainService from "@/services/MainServic";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
  },
  getters: {},
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars;
    },
  },
  actions: {
    getCars({ commit }, arabaTipi) {
      if (arabaTipi == "binek")
        return MainService.getBinek()
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      else if (arabaTipi == "isMakinesi") {
        return MainService.getIsMakinesi()
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      } else if (arabaTipi == "otobus")
        return MainService.getOtobus()
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      else if (arabaTipi == "kamyon")
        return MainService.getKamyon()
          .then((res) => {
            commit("SET_CARS", res.data);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
    },
  },
  modules: {},
});
