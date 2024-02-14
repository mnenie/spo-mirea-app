import UserService from "@/services/UserService";
import { CODE_ROUTE } from "@/utils/consts";
import { defineStore } from "pinia";
import {ref} from 'vue'
import { useRouter } from "vue-router";

export const useAuth = defineStore('auth', () => {
  const user = ref([])
  const token = ref('')
  const router = useRouter()

  const userRegistrationWithEmail = async (userData) => {
    try{
      const response = await UserService.registration(userData)
      token.value = response.data.refreshToken
      user.value = response.data.user
      console.log(user.value)
      router.push(CODE_ROUTE)
    }
    catch(err){
      console.log(err)
    }
  }
  return {
    user, token, userRegistrationWithEmail
  }
})