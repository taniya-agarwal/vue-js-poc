import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'Taniya',
    age: 16,
    count: 0
  },

  getters: {
    getUsername: state => {
      return state.username;
    }
  },

  mutations: {
    updateName(state, newname) {
      state.username = newname
    },
    increment: state => state.count++,
    decrement: state => state.count--
  },

  actions: {

  }
});
