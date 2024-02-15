<script setup>
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="auth_main_part">
    <p class="name">{{ route.path === AUTH_ROUTE ? 'Вход' : 'Регистрация' }}</p>
    <div class="btn-section">
      <RedButton @click="router.push({path: '/confirm/email', query: {from: route.name}})">Продолжить с почтой</RedButton>
      <BorderButton @click="router.push({path: '/confirm/phone', query: {from: route.name}})">Использовать номер телефона</BorderButton>
    </div>
    <span @click="route.path === AUTH_ROUTE ? router.push(REGISTRATION_ROUTE) : router.push(AUTH_ROUTE)" class="another">{{ route.path === AUTH_ROUTE ? 'Или зарегистрироваться в приложении' : 'Или войти в приложение'}}</span>
  </div>
</template>

<style scoped>
.auth_main_part{
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
}
.name{
  font-weight: 400;
  line-height: 150%;
  color: var(--text-color);
  font-size: 18px;
}
.btn-section{
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
.another{
  font-weight: 400;
  font-size: 12px;
  color: var(--red-color);
  margin-top: -10px;
}
</style>