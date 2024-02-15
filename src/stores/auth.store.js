import UserService from "@/services/UserService";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "@/utils/consts";
import { defineStore } from "pinia";
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/firebase/index'

export const useAuth = defineStore('auth', () => {
  const user = ref({})
  const token = ref('')
  const router = useRouter()

  const userRegistrationWithEmail = async (userData) => {
    try {
      const response = await UserService.registration(userData)
      token.value = response.data.idToken
      user.value = response.data.email
      sessionStorage.setItem('token', token.value)
      console.log(user.value)
      router.push(HOME_ROUTE)
    }
    catch (err) {
      console.log(err)
    }
  }
  const userLoginWithEmail = async (userData) => {
    try {
      const response = await UserService.login(userData)
      token.value = response.data.idToken
      sessionStorage.setItem('token', token.value)
      user.value = response.data.email
      router.push(HOME_ROUTE)
    }
    catch (err) {
      console.log(err)
    }
  }

  const userLoginWithGoogle = async() => {
    try{
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then((response) => {
        GoogleAuthProvider.credentialFromResult(response)
        token.value = response.user.accessToken
        sessionStorage.setItem('token', token.value)
        user.value = response.user
        router.push(HOME_ROUTE)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const userLogout = async () => {
    try {
      const response = await UserService.logout()
      await router.push(REGISTRATION_ROUTE)
      user.value = {}
      token.value = ''
      return response
    } catch (err) { 
      console.log(err) 
    }
  }
  return {
    user, token, userRegistrationWithEmail, userLoginWithEmail, userLogout, userLoginWithGoogle
  }
})