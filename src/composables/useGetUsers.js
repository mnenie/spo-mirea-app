import $api from "@/api"

export default function useGetUsers() {
  const getUsers = async () => {
    try {
      const response = await $api.get(`https://tinder-1ed73-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    getUsers
  }
}
