<script setup>
import { AUTH_ROUTE } from '@/utils/consts'
</script>

<template>
  <div class="auth_main_part">
    <p class="name">{{ $route.path === AUTH_ROUTE ? 'Вход' : 'Регистрация' }}</p>
    <div class="btn-section">
      <RedButton>Продолжить с почтой</RedButton>
      <BorderButton>Использовать номер телефона</BorderButton>
    </div>
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
</style>