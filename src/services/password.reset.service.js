import BaseService from "./base.service";

export default class ResetPasswordService extends BaseService {

  static async forgotPassword(params) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/forgot-password', params)
        .then(response => resolve(response))
        .catch(error => reject(error.response))
    })
  }

  static async resetPassword(params) {
    return new Promise((resolve, reject) => {
      this.request()
        .post('/reset-password', params)
        .then(response => resolve(response))
        .catch(error => reject(error.response))
    })
  }
}