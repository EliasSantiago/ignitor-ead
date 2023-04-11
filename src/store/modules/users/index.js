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
      login(_, params) {
        return AuthService.login(params)
      },

      forgotPassword(_, params) {
        return ResetPasswordService.forgotPassword(params)
      },
    },
  }