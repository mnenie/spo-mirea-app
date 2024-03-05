

<script setup>


import { HOME_ROUTE, PROFILE_ROUTE } from '@/utils/consts';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const btns = ref([
  { id: 0, name: 'cards', url: '/icons/cards.png', active: true },
  { id: 1, name: 'like', url: '/icons/like_indicator.png', active: false },
  { id: 2, name: 'message', url: '/icons/message.png', active: false },
  { id: 3, name: 'people', url: '/icons/people.png', active: false }
])

const router = useRouter()
const changeActiveBtn = (id) => {
  if (id === 3) {
    router.push(PROFILE_ROUTE)
    console.log(btns.value[3])
  }
  else if (id < 3) {
    router.push(HOME_ROUTE)
    console.log(btns.value[id])
  }
  btns.value.map((btn, i) => {
    btn.active = i === id

 

  })
}


</script>

<template>
  <div class="sidebar">
    <div
      v-for="btn in btns"
      :key="btn.id"
      @click="changeActiveBtn(btn.id)"
      class="sidebar_btn"
      :class="[btn.active ? 'active' : '']"
    >
      <img :src="btn.url" :alt="btn.name" />
    </div>
  </div>
</template>

<style scoped>
/* поменяй пж стили для класса active */

.sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--border-color);
  padding: 10px 30px;
}

.active {
  border-top: 2px solid var(--red-color);
}
</style>


