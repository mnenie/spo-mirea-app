<script setup>
import {ref} from 'vue'
import {useAuth} from '@/stores/auth.store'

const auth = useAuth()
const onGoogleSubmit = async () => {
  await auth.userLoginWithGoogle()
}

const authIcons = ref([
  {id: 1, name: 'google', url: '/icons/google.png', submit: onGoogleSubmit}
])
</script>

<template>
  <div class="auth_with">
    <div class="line-section">
      <div class="line"></div>
      <span class="line_name">Зайти с помощью</span>
      <div class="line"></div>
    </div>
    <div class="btns-section">
      <div v-for="i in authIcons" :key="i.id" @click="i.submit" class="btn">
        <img :src="i.url" :alt="i.name">
      </div>
    </div>
  </div>
</template>


<style scoped>
.auth_with{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 86px;
}
.line-section{
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
}
.line{
  width: 100%;
  height: 0.5px;
  background: var(--black-opacity-color);
}
.line_name{
  white-space: nowrap;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: var(--text-color);
}
.btns-section{
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
}
.btn{
  width: 46px;
  height: 46px;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn > img{
  width: 26px;
  height: 26px;
}
</style>