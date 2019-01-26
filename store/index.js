import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
      language: 'ru'
  },
  mutations: {
      changeLanguage (state , lang) {
          state.language = lang;
      },
  },
  getters: {
      getLanguage: state => {
          return state.language;
      },
  }
});

export default store