import $api from '@/api/index'

export default class UserService {

  static async registration(user){
    const userReg = {...user, returnSecureToken: true}
    const response = await $api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_API_KEY_FIREBASE}`, userReg)
    return response
  }

  static async login(user) {
    const userAuth = {...user, returnSecureToken: true}
    const response = await $api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_API_KEY_FIREBASE}`, userAuth)
    return response
  }
  
  static async logout() {
    sessionStorage.removeItem('token')
  }
}