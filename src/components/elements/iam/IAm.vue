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
    <RedButton>Продолжить</RedButton>
  </div>
</template>

<style scoped>
.btn {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  border-radius: 15px;
  border: 1px solid var(--border-color); 
  font-size: 14px;
  font-weight: 400;
  padding-left: 20px;
  transition: 0.15s ease-in;
}
.active {
  color: var(--white-color);
  background: var(--red-color);
}
.active::after {
  content: ''; 
  position: absolute;
  right: 20px;
  width: 13px; 
  height: 13px; 
  background-image: url('/icons/check.png'); 
  background-size: contain; 
  background-repeat: no-repeat; 
}
</style>