import AuthService from "@/services/auth.service"
import ResetPasswordService from "@/services/password.reset.service"

export default
  {
    state: {
      user: {
        name: '',
        email: '',
      },
      loggedIn: false,
    },

    mutations: {
      SET_USER(state, user) {
        state.user = user
        state.loggedIn = true
      },
      LOGOUT(state) {
        state.user = {
          name: '',
          email: '',
        }

        state.loggedIn = false
      }
    },

    actions: {
      login({ dispatch }, params) {
        return AuthService.login(params)
          .then(() => dispatch('getMe'))
      },

      logout({ commit }) {
        commit('CHANGE_LOADING', true)
        return AuthService.logout()
          .then(() => commit('LOGOUT'))
          .finally(() => commit('CHANGE_LOADING', false))
      },

      forgotPassword(_, params) {
        return ResetPasswordService.forgotPassword(params)
      },

      getMe({ commit }) {
        commit('CHANGE_LOADING', true, 'Carregando dados do usuário...')
        AuthService.getMe()
          .then(user => {
            commit('SET_USER', user)
          })
          .finally(() => commit('CHANGE_LOADING', false))
      },
    },
  }