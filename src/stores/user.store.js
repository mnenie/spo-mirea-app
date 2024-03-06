import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { users } from '@/mocks/users.mock'

export const useUsers = defineStore('users', () => {
  const usersArr = ref(users.value)
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
    filterUsers
  }
})
