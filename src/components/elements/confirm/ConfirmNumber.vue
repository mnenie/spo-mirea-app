<script setup>
import {ref} from 'vue'
const number = ref('')
</script>

<template>
  <div class="confirm">
    <div class="text">
      <h1>Мой номер</h1>
      <p>Пожалуйста, введите свой действующий номер телефона. Мы вышлем вам 4-значный код для подтверждения вашей учетной записи.</p>
      <DefaultInput v-model="number" :placeholder="'+7 (XXX) XXX-XX-XX'" />
    </div>
    <RedButton>Продолжить</RedButton>
  </div>
</template>


<style scoped>
.confirm {
  display: flex;
  flex-direction: column;
  gap: 54px;
}
.text{
  display: flex;
  flex-direction: column;
}

.text > h1{
  font-weight: 400;
  font-size: 30px;
  color: var(--text-color);
  margin-bottom: 6px;
}

.text > p {
  font-weight: 400;
  font-size: 12px;
  color: var(--text-color);
  margin-bottom: 20px;
}
</style>