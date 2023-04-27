import { createStore } from 'vuex'
import users from './modules/users'
import courses from './modules/courses'
import supports from './modules/supports'

export default createStore({
  state: {
    loading: false,
    loadingMsg: 'Carregando...'
  },
  getters: {
  },
  mutations: {
    CHANGE_LOADING(state, status, msg = 'Carregando...') {
      state.loading = status
      state.loadingMsg = msg
    }
  },
  actions: {
  },
  modules: {
    users,
    courses,
    supports
  }
})
