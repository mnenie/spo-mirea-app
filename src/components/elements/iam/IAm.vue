<script setup>
import { ref } from 'vue'
const filters = ref([
  {id: 0, name: 'Мужчина', active: false},
  {id: 1, name: 'Женщина', active: true},
])

const changeColor = (id) => {
  filters.value.map((btn, i) => {
    btn.active = i === id
  })
}
</script>

<template>
  <div class="$1">
    <div v-for="filter in filters" :key="filter.id" @click="changeColor(filter.id)" style="cursor: pointer;" class="btn" :class="{'active': filter.active}">
      <span>{{ filter.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.active{
  border: 1px solid red;
}
</style>