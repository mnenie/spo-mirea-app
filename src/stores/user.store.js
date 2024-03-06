import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// import { users } from '@/mocks/users.mock'
//in dev mode
import useGetUsers from '@/composables/useGetUsers'

export const useUsers = defineStore('users', () => {
  const user = ref({})
  const users = ref([])
  const usersArr = ref([])
  const { getUsers } = useGetUsers()

  const getUsersStore = async () => {
    try {
      const creds = await getUsers()
      users.value = creds
      usersArr.value = users.value
    } catch (err) {
      console.log(err)
    }
  }

  const setUserParams = async (img, name, lastname, city, date) => {
    user.value = {img, name, lastname, city, date }
    localStorage.setItem('user', JSON.stringify(user.value))
    user.value = JSON.parse(localStorage.getItem('user'))
  }

  const filterUsers = computed(() => {
    return (filters) => {
      usersArr.value = users.value.filter((user) => {
        return (
          (!filters.gender || user.gender === filters.gender) &&
          (!filters.city || user.city === filters.city)
        )
      })
    }
  })

  return {
    usersArr,
    filterUsers,
    getUsersStore,
    setUserParams
  }
})
