import BaseService from "./base.service";
import { TOKEN_NAME } from "@/configs";

export default class AuthService extends BaseService {

  static async login (params) {
    return new Promise((resolve, reject) => {
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