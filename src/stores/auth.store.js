import UserService from "@/services/UserService";
import { CODE_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE } from "@/utils/consts";
import { defineStore } from "pinia";
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber } from "firebase/auth";
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
      router.push(PROFILE_ROUTE)
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
      router.push(PROFILE_ROUTE)
    }
    catch (err) {
      console.log(err)
    }
  }

  const userLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider).then((response) => {
        GoogleAuthProvider.credentialFromResult(response)
        token.value = response.user.accessToken
        sessionStorage.setItem('token', token.value)
        user.value = response.user
        router.push(PROFILE_ROUTE)
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

  const onPhoneLogin = async (recaptchaVerifier, number) => {
    const appVerifier = recaptchaVerifier.value;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, number.value, appVerifier);
      user.value = confirmationResult;
      router.push(CODE_ROUTE)
      console.log(user.value)
    } catch (error) {
      console.error("Error sending verification code", error);
    }
  }

  const verifyOtp = async (code) => {
    try {
      const response = await user.value.confirm(code.value)
      token.value = response.user.accessToken
      sessionStorage.setItem('token', token.value)
      user.value = response.user
      return response
    }
    catch (e) {
      console.log(e)
    }
  }

  return {
    user, token, userRegistrationWithEmail, userLoginWithEmail, userLogout, userLoginWithGoogle, onPhoneLogin, verifyOtp
  }
})