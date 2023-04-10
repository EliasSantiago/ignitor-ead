import BaseService from "./base.service";

export default class AuthService extends BaseService {

  static async login (params) {
    return new Promisse((resolve, reject) => {
      this.request()
        .post('/login', params)
        .then(response => {
          localStorage.setItem(TOKEN_NAME, response.data.token)
          resolve(response)
        })
        .catch(error => reject(error.response))
    })
  }
}